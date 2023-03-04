import * as pt from 'pareto-core-types'

import * as g_h from "glo-astn-handlers"
import * as g_schema from "glo-astn-schema"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace Dictionary {
        
        export type definition<GAnnotation> = g_schema.T.dictionary<T.Annotation<GAnnotation>>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export type Dictionary<GAnnotation> = {
        readonly 'definition': g_schema.T.dictionary<T.Annotation<GAnnotation>>
        readonly 'token': [ false ] | [ true, g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace DictionaryClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export type DictionaryClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace Entry {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export type Entry<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace Group {
        
        export type definition<GAnnotation> = g_schema.T.group<T.Annotation<GAnnotation>>
        
        export namespace _ltype {
            
            export namespace mixin {}
            
            export type mixin<GAnnotation> = null
            
            export namespace omitted {}
            
            export type omitted<GAnnotation> = null
            
            export type shorthand<GAnnotation> = g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>
            
            export type verbose<GAnnotation> = g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>
        }
        
        export type _ltype<GAnnotation> = 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>]
            | ['verbose', g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export type Group<GAnnotation> = {
        readonly 'definition': g_schema.T.group<T.Annotation<GAnnotation>>
        readonly 'type': 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>]
            | ['verbose', g_h.T.OpenObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace GroupClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export type GroupClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseObjectToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace List {
        
        export type definition<GAnnotation> = g_schema.T.list<T.Annotation<GAnnotation>>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>]
    }
    
    export type List<GAnnotation> = {
        readonly 'definition': g_schema.T.list<T.Annotation<GAnnotation>>
        readonly 'token': [ false ] | [ true, g_h.T.OpenArrayToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace ListClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseArrayToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseArrayToken<T.Annotation<GAnnotation>>]
    }
    
    export type ListClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseArrayToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace MultilineString {
        
        export type definition<GAnnotation> = g_schema.T.multiline__string<T.Annotation<GAnnotation>>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.MultilineStringToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.MultilineStringToken<T.Annotation<GAnnotation>>]
    }
    
    export type MultilineString<GAnnotation> = {
        readonly 'definition': g_schema.T.multiline__string<T.Annotation<GAnnotation>>
        readonly 'token': [ false ] | [ true, g_h.T.MultilineStringToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace Option {
        
        export type definition<GAnnotation> = g_schema.T.options<T.Annotation<GAnnotation>>
        
        export type name<GAnnotation> = string
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export type Option<GAnnotation> = {
        readonly 'definition': g_schema.T.options<T.Annotation<GAnnotation>>
        readonly 'name': string
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace Property {
        
        export type definition<GAnnotation> = g_schema.T.value<T.Annotation<GAnnotation>>
        
        export type key<GAnnotation> = string
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export type Property<GAnnotation> = {
        readonly 'definition': g_schema.T.value<T.Annotation<GAnnotation>>
        readonly 'key': string
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace SimpleString {
        
        export type definition<GAnnotation> = g_schema.T.simple__string<T.Annotation<GAnnotation>>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
        
        export type value<GAnnotation> = string
    }
    
    export type SimpleString<GAnnotation> = {
        readonly 'definition': g_schema.T.simple__string<T.Annotation<GAnnotation>>
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>]
        readonly 'value': string
    }
    
    export namespace TaggedUnion {
        
        export type definition<GAnnotation> = g_schema.T.tagged__union<T.Annotation<GAnnotation>>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.TaggedUnionToken<T.Annotation<GAnnotation>>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.TaggedUnionToken<T.Annotation<GAnnotation>>]
    }
    
    export type TaggedUnion<GAnnotation> = {
        readonly 'definition': g_schema.T.tagged__union<T.Annotation<GAnnotation>>
        readonly 'token': [ false ] | [ true, g_h.T.TaggedUnionToken<T.Annotation<GAnnotation>>]
    }
    
    export namespace TypeReference {
        
        export type definition<GAnnotation> = g_schema.T.type__reference<T.Annotation<GAnnotation>>
    }
    
    export type TypeReference<GAnnotation> = {
        readonly 'definition': g_schema.T.type__reference<T.Annotation<GAnnotation>>
    }
    
    export namespace UnexpectedOption {
        
        export type defaultOption<GAnnotation> = string
        
        export namespace expectedOptions {
            
            export type D<GAnnotation> = null
        }
        
        export type expectedOptions<GAnnotation> = pt.Dictionary<null>
        
        export type token<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
    }
    
    export type UnexpectedOption<GAnnotation> = {
        readonly 'defaultOption': string
        readonly 'expectedOptions': pt.Dictionary<null>
        readonly 'token': g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
    }
    
    export namespace UnexpectedProperty {
        
        export namespace expectedProperties {
            
            export type D<GAnnotation> = null
        }
        
        export type expectedProperties<GAnnotation> = pt.Dictionary<null>
        
        export type groupDefinition<GAnnotation> = g_schema.T.group<T.Annotation<GAnnotation>>
        
        export type token<GAnnotation> = g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
    }
    
    export type UnexpectedProperty<GAnnotation> = {
        readonly 'expectedProperties': pt.Dictionary<null>
        readonly 'groupDefinition': g_schema.T.group<T.Annotation<GAnnotation>>
        readonly 'token': g_h.T.SimpleStringToken<T.Annotation<GAnnotation>>
    }
}