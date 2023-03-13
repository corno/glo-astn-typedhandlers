import * as pd from 'pareto-core-data'
import {
    string,
    typeReference,
    interfaceReference,
    interfaceMethod, dictionary, group, member, taggedUnion, types, type, computed, typeParameter, parametrizedType, boolean, glossaryParameter, optional, null_, stream, choice, imp, ref, externalTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "h": imp({
            "Annotation": typeReference("Annotation")
        }),
        "schema": imp({
            "Annotation": typeReference("Annotation")
        }),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
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
    'type': ['asynchronous', {
        'interfaces': d({
            "GroupHandler": stream(
                choice({
                    "unexpectedProperty": interfaceMethod(typeReference("UnexpectedProperty")),
                    "property": interfaceMethod(typeReference("Property"), ['reference', interfaceReference("ValueHandler")]),
                }),
                interfaceMethod(typeReference("GroupClose")),
            ),
            "DictionaryHandler": stream(
                interfaceMethod(typeReference("Entry"), ['reference', interfaceReference("ValueHandler")]),
                interfaceMethod(typeReference("DictionaryClose")),
            ),
            "ListHandler": stream(
                interfaceMethod(null, ['reference', interfaceReference("ValueHandler")]),
                interfaceMethod(typeReference("ListClose")),
            ),
            "TaggedUnionHandler": stream(
                choice({
                    "option": interfaceMethod(typeReference("Option"), ['reference', interfaceReference("ValueHandler")]),
                    "unexpectedOption": interfaceMethod(typeReference("Option"), ['reference', interfaceReference("ValueHandler")]),
                }),
                interfaceMethod(null),
            ),
            "ValueHandler": choice({
                "group": interfaceMethod(typeReference("Group"), ['reference', interfaceReference("GroupHandler")]),
                "list": interfaceMethod(typeReference("List"), ['reference', interfaceReference("ListHandler")]),
                "dictionary": interfaceMethod(typeReference("Dictionary"), ['reference', interfaceReference("DictionaryHandler")]),
                "typeReference": interfaceMethod(typeReference("TypeReference"), ['reference', interfaceReference("ValueHandler")]),
                "taggedUnion": interfaceMethod(typeReference("TaggedUnion"), ['reference', interfaceReference("TaggedUnionHandler")]),
                "simpleString": interfaceMethod(typeReference("SimpleString")),
                "multilineString": interfaceMethod(typeReference("MultilineString")),
            }),
            "RootHandler": interfaceMethod(null, ['reference', interfaceReference("ValueHandler")]),
        }),
        'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({}),
    }]
}