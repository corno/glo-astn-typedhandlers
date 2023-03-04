import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_h from "glo-astn-handlers"
import * as g_schema from "glo-astn-schema"

export namespace I {
    
    export type DictionaryHandler<GAnnotation> = {
        'onClose': ($: T.DictionaryClose<GAnnotation>, ) => void
        'onEntry': ($: T.Entry<GAnnotation>, ) => I.ValueHandler<GAnnotation>
    }
    
    export type GroupHandler<GAnnotation> = {
        'onClose': ($: T.GroupClose<GAnnotation>, ) => void
        'onProperty': ($: T.Property<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        'onUnexpectedProperty': ($: T.UnexpectedProperty<GAnnotation>, ) => void
    }
    
    export type ListHandler<GAnnotation> = {
        'onClose': ($: T.ListClose<GAnnotation>, ) => void
        'onElement': () => I.ValueHandler<GAnnotation>
    }
    
    export type RootHandler<GAnnotation> = {
        'onEnd': () => void
        'root': I.ValueHandler<GAnnotation>
    }
    
    export type TaggedUnionHandler<GAnnotation> = {
        'onEnd': () => void
        'onOption': ($: T.Option<GAnnotation>, ) => I.ValueHandler<GAnnotation>
        'onUnexpectedOption': ($: T.Option<GAnnotation>, ) => I.ValueHandler<GAnnotation>
    }
    
    export type ValueHandler<GAnnotation> = {
        'onDictionary': ($: T.Dictionary<GAnnotation>, ) => I.DictionaryHandler<GAnnotation>
        'onGroup': ($: T.Group<GAnnotation>, ) => I.GroupHandler<GAnnotation>
        'onList': ($: T.List<GAnnotation>, ) => I.ListHandler<GAnnotation>
        'onMultilineString': ($: T.MultilineString<GAnnotation>, ) => void
        'onSimpleString': ($: T.SimpleString<GAnnotation>, ) => void
        'onTaggedUnion': ($: T.TaggedUnion<GAnnotation>, ) => I.TaggedUnionHandler<GAnnotation>
        'onTypeReference': ($: T.TypeReference<GAnnotation>, ) => I.ValueHandler<GAnnotation>
    }
}

export namespace B {}

export namespace F {}