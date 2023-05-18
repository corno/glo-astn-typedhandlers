import {
    aInterface,
    aInterfaceMethod, aInterfaceReference, choice, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, optional, ref, streamconsumer, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"
import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp(),
        "schema": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Entry": type(group({
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") })))),
            })),
            "Group": type(group({
                "type": member(taggedUnion({
                    "verbose": ref(externalTypeReference("h", "OpenObjectToken", { "Annotation": glossaryParameter("Annotation") })),
                    "shorthand": ref(externalTypeReference("h", "OpenArrayToken", { "Annotation": glossaryParameter("Annotation") })),
                    "mixin": group({}),
                    "omitted": group({}),
                })),
                "definition": member(ref(externalTypeReference("schema", "group", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "List": type(group({
                "token": member(optional(ref(externalTypeReference("h", "OpenArrayToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "list", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "ListClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseArrayToken", { "Annotation": glossaryParameter("Annotation") })))),
            })),
            "Dictionary": type(group({
                "token": member(optional(ref(externalTypeReference("h", "OpenObjectToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "dictionary", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "DictionaryClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseObjectToken", { "Annotation": glossaryParameter("Annotation") })))),
            })),
            "GroupClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseObjectToken", { "Annotation": glossaryParameter("Annotation") })))),
            })),
            "TypeReference": type(group({
                "definition": member(ref(externalTypeReference("schema", "type reference", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "TaggedUnion": type(group({
                "token": member(optional(ref(externalTypeReference("h", "TaggedUnionToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "tagged union", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "SimpleString": type(group({
                "value": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "simple string", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "MultilineString": type(group({
                "token": member(optional(ref(externalTypeReference("h", "MultilineStringToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "multiline string", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "Option": type(group({
                "name": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") })))),
                "definition": member(ref(externalTypeReference("schema", "options", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "UnexpectedOption": type(group({
                "defaultOption": member(string()),//the unmarshaller will initialize the default option.
                "expectedOptions": member(dictionary(null_())),
                "token": member(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "Property": type(group({
                "key": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") })))),//cannot be shorthand, so there must be a token, so not optional
                "definition": member(ref(externalTypeReference("schema", "value", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "UnexpectedProperty": type(group({
                "expectedProperties": member(dictionary(null_())),
                "token": member(ref(externalTypeReference("h", "SimpleStringToken", { "Annotation": glossaryParameter("Annotation") }))),
                "groupDefinition": member(ref(externalTypeReference("schema", "group", { "Annotation": glossaryParameter("Annotation") }))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "GroupHandler": aInterface(streamconsumer(
                choice({
                    "unexpectedProperty": aInterfaceMethod(typeReference("UnexpectedProperty")),
                    "property": aInterfaceMethod(typeReference("Property"), ['reference', aInterfaceReference("ValueHandler")]),
                }),
                aInterfaceMethod(typeReference("GroupClose")),
            )),
            "DictionaryHandler": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("Entry"), ['reference', aInterfaceReference("ValueHandler")]),
                aInterfaceMethod(typeReference("DictionaryClose")),
            )),
            "ListHandler": aInterface(streamconsumer(
                aInterfaceMethod(null, ['reference', aInterfaceReference("ValueHandler")]),
                aInterfaceMethod(typeReference("ListClose")),
            )),
            "TaggedUnionHandler": aInterface(streamconsumer(
                choice({
                    "option": aInterfaceMethod(typeReference("Option"), ['reference', aInterfaceReference("ValueHandler")]),
                    "unexpectedOption": aInterfaceMethod(typeReference("Option"), ['reference', aInterfaceReference("ValueHandler")]),
                }),
                aInterfaceMethod(null),
            )),
            "ValueHandler": aInterface(choice({
                "group": aInterfaceMethod(typeReference("Group"), ['reference', aInterfaceReference("GroupHandler")]),
                "list": aInterfaceMethod(typeReference("List"), ['reference', aInterfaceReference("ListHandler")]),
                "dictionary": aInterfaceMethod(typeReference("Dictionary"), ['reference', aInterfaceReference("DictionaryHandler")]),
                "typeReference": aInterfaceMethod(typeReference("TypeReference"), ['reference', aInterfaceReference("ValueHandler")]),
                "taggedUnion": aInterfaceMethod(typeReference("TaggedUnion"), ['reference', aInterfaceReference("TaggedUnionHandler")]),
                "simpleString": aInterfaceMethod(typeReference("SimpleString")),
                "multilineString": aInterfaceMethod(typeReference("MultilineString")),
            })),
            "RootHandler": aInterface(aInterfaceMethod(null, ['reference', aInterfaceReference("ValueHandler")])),
        }),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
}