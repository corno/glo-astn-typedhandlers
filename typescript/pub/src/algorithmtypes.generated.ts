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
                'property': ($: T.Property<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
                'unexpectedProperty': ($: T.UnexpectedProperty<GAnnotation>, ) => void
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
                'option': ($: T.Option<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
                'unexpectedOption': ($: T.Option<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
            }
            'end': () => void
        }
        
        export type ValueHandler<GAnnotation> = {
            'dictionary': ($: T.Dictionary<GAnnotation>, ) => ASYNC.I.DictionaryHandler<GAnnotation>
            'group': ($: T.Group<GAnnotation>, ) => ASYNC.I.GroupHandler<GAnnotation>
            'list': ($: T.List<GAnnotation>, ) => ASYNC.I.ListHandler<GAnnotation>
            'multilineString': ($: T.MultilineString<GAnnotation>, ) => void
            'simpleString': ($: T.SimpleString<GAnnotation>, ) => void
            'taggedUnion': ($: T.TaggedUnion<GAnnotation>, ) => ASYNC.I.TaggedUnionHandler<GAnnotation>
            'typeReference': ($: T.TypeReference<GAnnotation>, ) => ASYNC.I.ValueHandler<GAnnotation>
        }
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {}
}