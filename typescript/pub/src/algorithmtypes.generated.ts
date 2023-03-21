import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_h from "glo-astn-handlers"
import * as g_schema from "glo-astn-schema"

export namespace ASYNC {
    
    export namespace I {
        
        export type DictionaryHandler<GAnnotation> = {
            'data': ($: T.Entry<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
            'end': ($: T.DictionaryClose<GAnnotation>, ) => void
        }
        
        export type GroupHandler<GAnnotation> = {
            'data': {
                readonly 'property': ($: T.Property<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
                readonly 'unexpectedProperty': ($: T.UnexpectedProperty<GAnnotation>, ) => void
            }
            'end': ($: T.GroupClose<GAnnotation>, ) => void
        }
        
        export type ListHandler<GAnnotation> = {
            'data': () => ASYNC.I.ValueHandler<GAnnotation>
            'end': ($: T.ListClose<GAnnotation>, ) => void
        }
        
        export type RootHandler<GAnnotation> = () => ASYNC.I.ValueHandler<GAnnotation>
        
        export type TaggedUnionHandler<GAnnotation> = {
            'data': {
                readonly 'option': ($: T.Option<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
                readonly 'unexpectedOption': ($: T.Option<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
            }
            'end': () => void
        }
        
        export type ValueHandler<GAnnotation> = {
            readonly 'dictionary': ($: T.Dictionary<GAnnotation>, ) => ASYNC.I.DictionaryHandler<GAnnotation>
            readonly 'group': ($: T.Group<GAnnotation>, ) => ASYNC.I.GroupHandler<GAnnotation>
            readonly 'list': ($: T.List<GAnnotation>, ) => ASYNC.I.ListHandler<GAnnotation>
            readonly 'multilineString': ($: T.MultilineString<GAnnotation>, ) => void
            readonly 'simpleString': ($: T.SimpleString<GAnnotation>, ) => void
            readonly 'taggedUnion': ($: T.TaggedUnion<GAnnotation>, ) => ASYNC.I.TaggedUnionHandler<GAnnotation>
            readonly 'typeReference': ($: T.TypeReference<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
        }
    }
    
    export namespace A {}
}

export namespace SYNC {}