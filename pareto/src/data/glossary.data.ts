import * as pd from 'pareto-core-data'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    interfaceMethod, dictionary, group, member, taggedUnion, types, func, data, type, computed, typeParameter, parametrizedType, parametrizedReference, boolean, glossaryParameter, optional, null_
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
            "definition": member(parametrizedReference("schema", { "Annotation": typeReference("Annotation") }, "group"))
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
        "GroupHandler": ['group', {
            'members': d({
                "onUnexpectedProperty": interfaceMethod(typeReference("UnexpectedProperty")),
                "onProperty": interfaceMethod(typeReference("Property"), ['reference', interfaceReference("ValueHandler")]),
                "onClose": interfaceMethod(typeReference("GroupClose")),
            })
        }],
        "DictionaryHandler": ['group', {
            'members': d({
                "onEntry": interfaceMethod(typeReference("Entry"), ['reference', interfaceReference("ValueHandler")]),
                "onClose": interfaceMethod(typeReference("DictionaryClose")),
            })
        }],
        "ListHandler": ['group', {
            'members': d({
                "onElement": interfaceMethod(null, ['reference', interfaceReference("ValueHandler")]),
                "onClose": interfaceMethod(typeReference("ListClose")),
            })
        }],
        "TaggedUnionHandler": ['group', {
            'members': d({
                "onOption": interfaceMethod(typeReference("Option"), ['reference', interfaceReference("ValueHandler")]),
                "onUnexpectedOption": interfaceMethod(typeReference("Option"), ['reference', interfaceReference("ValueHandler")]),
                "onEnd": interfaceMethod(null),
            })
        }],
        "ValueHandler": ['group', {
            'members': d({
                "onGroup": interfaceMethod(typeReference("Group"), ['reference', interfaceReference("GroupHandler")]),
                "onList": interfaceMethod(typeReference("List"), ['reference', interfaceReference("ListHandler")]),
                "onDictionary": interfaceMethod(typeReference("Dictionary"), ['reference', interfaceReference("DictionaryHandler")]),
                "onTypeReference": interfaceMethod(typeReference("TypeReference"), ['reference', interfaceReference("ValueHandler")]),
                "onTaggedUnion": interfaceMethod(typeReference("TaggedUnion"), ['reference', interfaceReference("TaggedUnionHandler")]),
                "onSimpleString": interfaceMethod(typeReference("SimpleString")),
                "onMultilineString": interfaceMethod(typeReference("MultilineString")),
            })
        }],
        "RootHandler": ['group', {
            'members': d({
                "root": ['reference', interfaceReference("ValueHandler")],
                "onEnd": interfaceMethod(null),
            })
        }],
    }),
    'functions': d({

    }),
}