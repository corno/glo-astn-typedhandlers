import {
    aInterface,
    aInterfaceMethod, aInterfaceReference, choice, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, optional, ref, streamconsumer, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"
import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp({
            "Annotation": glossaryParameter("Annotation")
        }),
        "schema": imp({
            "Annotation": glossaryParameter("Annotation")
        }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Entry": type(group({
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken")))),
            })),
            "Group": type(group({
                "type": member(taggedUnion({
                    "verbose": ref(externalTypeReference("h", "OpenObjectToken")),
                    "shorthand": ref(externalTypeReference("h", "OpenArrayToken")),
                    "mixin": group({}),
                    "omitted": group({}),
                })),
                "definition": member(ref(externalTypeReference("schema", "group"))),
            })),
            "List": type(group({
                "token": member(optional(ref(externalTypeReference("h", "OpenArrayToken")))),
                "definition": member(ref(externalTypeReference("schema", "list"))),
            })),
            "ListClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseArrayToken")))),
            })),
            "Dictionary": type(group({
                "token": member(optional(ref(externalTypeReference("h", "OpenObjectToken")))),
                "definition": member(ref(externalTypeReference("schema", "dictionary"))),
            })),
            "DictionaryClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseObjectToken")))),
            })),
            "GroupClose": type(group({
                "token": member(optional(ref(externalTypeReference("h", "CloseObjectToken")))),
            })),
            "TypeReference": type(group({
                "definition": member(ref(externalTypeReference("schema", "type reference"))),
            })),
            "TaggedUnion": type(group({
                "token": member(optional(ref(externalTypeReference("h", "TaggedUnionToken")))),
                "definition": member(ref(externalTypeReference("schema", "tagged union"))),
            })),
            "SimpleString": type(group({
                "value": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken")))),
                "definition": member(ref(externalTypeReference("schema", "simple string"))),
            })),
            "MultilineString": type(group({
                "token": member(optional(ref(externalTypeReference("h", "MultilineStringToken")))),
                "definition": member(ref(externalTypeReference("schema", "multiline string"))),
            })),
            "Option": type(group({
                "name": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken")))),
                "definition": member(ref(externalTypeReference("schema", "options"))),
            })),
            "UnexpectedOption": type(group({
                "defaultOption": member(string()),//the unmarshaller will initialize the default option.
                "expectedOptions": member(dictionary(null_())),
                "token": member(ref(externalTypeReference("h", "SimpleStringToken"))),
            })),
            "Property": type(group({
                "key": member(string()),
                "token": member(optional(ref(externalTypeReference("h", "SimpleStringToken")))),//cannot be shorthand, so there must be a token, so not optional
                "definition": member(ref(externalTypeReference("schema", "value"))),
            })),
            "UnexpectedProperty": type(group({
                "expectedProperties": member(dictionary(null_())),
                "token": member(ref(externalTypeReference("h", "SimpleStringToken"))),
                "groupDefinition": member(ref(externalTypeReference("schema", "group"))),
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