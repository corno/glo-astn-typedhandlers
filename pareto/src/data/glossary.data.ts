import * as pd from 'pareto-core-data'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    interfaceMethod, dictionary, group, member, taggedUnion, types, func, data, type, computed, typeParameter, parametrizedType, parametrizedReference, boolean, glossaryParameter, optional, null_, stream, choice
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "Entry": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
        })),
        "Group": type(group({
            "type": member(taggedUnion({
                "verbose": parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenObjectToken"),
                "shorthand": parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenArrayToken"),
                "mixin": group({}),
                "omitted": group({}),
            })),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "group")),
        })),
        "List": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenArrayToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "list")),
        })),
        "ListClose": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseArrayToken"))),
        })),
        "Dictionary": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenObjectToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "dictionary")),
        })),
        "DictionaryClose": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseObjectToken"))),
        })),
        "GroupClose": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseObjectToken"))),
        })),
        "TypeReference": type(group({
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "type reference")),
        })),
        "TaggedUnion": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "TaggedUnionToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "tagged union")),
        })),
        "SimpleString": type(group({
            "value": member(string()),
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "simple string")),
        })),
        "MultilineString": type(group({
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "MultilineStringToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "multiline string")),
        })),
        "Option": type(group({
            "name": member(string()),
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "options")),
        })),
        "UnexpectedOption": type(group({
            "defaultOption": member(string()),//the unmarshaller will initialize the default option.
            "expectedOptions": member(dictionary(null_())),
            "token": member(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken")),
        })),
        "Property": type(group({
            "key": member(string()),
            "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),//cannot be shorthand, so there must be a token, so not optional
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "value")),
        })),
        "UnexpectedProperty": type(group({
            "expectedProperties": member(dictionary(null_())),
            "token": member(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken")),
            "groupDefinition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "group")),
        })),
    }),
    'builders': d({
    }),
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
    'functions': d({

    }),
}