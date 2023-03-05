import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_h from "glo-astn-handlers"
import * as g_schema from "glo-astn-schema"

export namespace I {
    
    export type DictionaryHandler<GAnnotation> = {
        'data': ($: T.Entry<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        'end': ($: T.DictionaryClose<GAnnotation>, ) => void
    }
    
    export type GroupHandler<GAnnotation> = {
        'data': {
            'property': ($: T.Property<GAnnotation>, ) => I.ValueHandler<GAnnotation>
            'unexpectedProperty': ($: T.UnexpectedProperty<GAnnotation>, ) => void
        }
        'end': ($: T.GroupClose<GAnnotation>, ) => void
    }
    
    export type ListHandler<GAnnotation> = {
        'data': () => I.ValueHandler<GAnnotation>
        'end': ($: T.ListClose<GAnnotation>, ) => void
    }
    
    export type RootHandler<GAnnotation> = () => I.ValueHandler<GAnnotation>
    
    export type TaggedUnionHandler<GAnnotation> = {
        'data': {
            'option': ($: T.Option<GAnnotation>, ) => I.ValueHandler<GAnnotation>
            'unexpectedOption': ($: T.Option<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        }
        'end': () => void
    }
    
    export type ValueHandler<GAnnotation> = {
        'dictionary': ($: T.Dictionary<GAnnotation>, ) => I.DictionaryHandler<GAnnotation>
        'group': ($: T.Group<GAnnotation>, ) => I.GroupHandler<GAnnotation>
        'list': ($: T.List<GAnnotation>, ) => I.ListHandler<GAnnotation>
        'multilineString': ($: T.MultilineString<GAnnotation>, ) => void
        'simpleString': ($: T.SimpleString<GAnnotation>, ) => void
        'taggedUnion': ($: T.TaggedUnion<GAnnotation>, ) => I.TaggedUnionHandler<GAnnotation>
        'typeReference': ($: T.TypeReference<GAnnotation>, ) => I.ValueHandler<GAnnotation>
    }
}

export namespace B {}

export namespace F {}