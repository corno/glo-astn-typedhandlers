import * as pt from 'pareto-core-types'

import * as g_h from "glo-astn-handlers"
import * as g_schema from "glo-astn-schema"

export namespace N {}

export namespace T {
    
    export namespace Dictionary {
        
        export type definition<GAnnotation> = g_schema.T.dictionary<GAnnotation>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.OpenObjectToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.OpenObjectToken<GAnnotation>]
    }
    
    export type Dictionary<GAnnotation> = {
        readonly 'definition': g_schema.T.dictionary<GAnnotation>
        readonly 'token': [ false ] | [ true, g_h.T.OpenObjectToken<GAnnotation>]
    }
    
    export namespace DictionaryClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseObjectToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseObjectToken<GAnnotation>]
    }
    
    export type DictionaryClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseObjectToken<GAnnotation>]
    }
    
    export namespace Entry {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export type Entry<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export namespace Group {
        
        export type definition<GAnnotation> = g_schema.T.group<GAnnotation>
        
        export namespace _ltype {
            
            export namespace mixin {}
            
            export type mixin<GAnnotation> = null
            
            export namespace omitted {}
            
            export type omitted<GAnnotation> = null
            
            export type shorthand<GAnnotation> = g_h.T.OpenArrayToken<GAnnotation>
            
            export type verbose<GAnnotation> = g_h.T.OpenObjectToken<GAnnotation>
        }
        
        export type _ltype<GAnnotation> = 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', g_h.T.OpenArrayToken<GAnnotation>]
            | ['verbose', g_h.T.OpenObjectToken<GAnnotation>]
    }
    
    export type Group<GAnnotation> = {
        readonly 'definition': g_schema.T.group<GAnnotation>
        readonly 'type': 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', g_h.T.OpenArrayToken<GAnnotation>]
            | ['verbose', g_h.T.OpenObjectToken<GAnnotation>]
    }
    
    export namespace GroupClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseObjectToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseObjectToken<GAnnotation>]
    }
    
    export type GroupClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseObjectToken<GAnnotation>]
    }
    
    export namespace List {
        
        export type definition<GAnnotation> = g_schema.T.list<GAnnotation>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.OpenArrayToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.OpenArrayToken<GAnnotation>]
    }
    
    export type List<GAnnotation> = {
        readonly 'definition': g_schema.T.list<GAnnotation>
        readonly 'token': [ false ] | [ true, g_h.T.OpenArrayToken<GAnnotation>]
    }
    
    export namespace ListClose {
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.CloseArrayToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.CloseArrayToken<GAnnotation>]
    }
    
    export type ListClose<GAnnotation> = {
        readonly 'token': [ false ] | [ true, g_h.T.CloseArrayToken<GAnnotation>]
    }
    
    export namespace MultilineString {
        
        export type definition<GAnnotation> = g_schema.T.multiline__string<GAnnotation>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.MultilineStringToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.MultilineStringToken<GAnnotation>]
    }
    
    export type MultilineString<GAnnotation> = {
        readonly 'definition': g_schema.T.multiline__string<GAnnotation>
        readonly 'token': [ false ] | [ true, g_h.T.MultilineStringToken<GAnnotation>]
    }
    
    export namespace Option {
        
        export type definition<GAnnotation> = g_schema.T.options<GAnnotation>
        
        export type name<GAnnotation> = string
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export type Option<GAnnotation> = {
        readonly 'definition': g_schema.T.options<GAnnotation>
        readonly 'name': string
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export namespace Property {
        
        export type definition<GAnnotation> = g_schema.T.value<GAnnotation>
        
        export type key<GAnnotation> = string
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export type Property<GAnnotation> = {
        readonly 'definition': g_schema.T.value<GAnnotation>
        readonly 'key': string
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
    }
    
    export namespace SimpleString {
        
        export type definition<GAnnotation> = g_schema.T.simple__string<GAnnotation>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
        
        export type value<GAnnotation> = string
    }
    
    export type SimpleString<GAnnotation> = {
        readonly 'definition': g_schema.T.simple__string<GAnnotation>
        readonly 'token': [ false ] | [ true, g_h.T.SimpleStringToken<GAnnotation>]
        readonly 'value': string
    }
    
    export namespace TaggedUnion {
        
        export type definition<GAnnotation> = g_schema.T.tagged__union<GAnnotation>
        
        export namespace token {
            
            export type O<GAnnotation> = g_h.T.TaggedUnionToken<GAnnotation>
        }
        
        export type token<GAnnotation> = [ false ] | [ true, g_h.T.TaggedUnionToken<GAnnotation>]
    }
    
    export type TaggedUnion<GAnnotation> = {
        readonly 'definition': g_schema.T.tagged__union<GAnnotation>
        readonly 'token': [ false ] | [ true, g_h.T.TaggedUnionToken<GAnnotation>]
    }
    
    export namespace TypeReference {
        
        export type definition<GAnnotation> = g_schema.T.type__reference<GAnnotation>
    }
    
    export type TypeReference<GAnnotation> = {
        readonly 'definition': g_schema.T.type__reference<GAnnotation>
    }
    
    export namespace UnexpectedOption {
        
        export type defaultOption<GAnnotation> = string
        
        export namespace expectedOptions {
            
            export type D<GAnnotation> = null
        }
        
        export type expectedOptions<GAnnotation> = pt.Dictionary<null>
        
        export type token<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
    }
    
    export type UnexpectedOption<GAnnotation> = {
        readonly 'defaultOption': string
        readonly 'expectedOptions': pt.Dictionary<null>
        readonly 'token': g_h.T.SimpleStringToken<GAnnotation>
    }
    
    export namespace UnexpectedProperty {
        
        export namespace expectedProperties {
            
            export type D<GAnnotation> = null
        }
        
        export type expectedProperties<GAnnotation> = pt.Dictionary<null>
        
        export type groupDefinition<GAnnotation> = g_schema.T.group<GAnnotation>
        
        export type token<GAnnotation> = g_h.T.SimpleStringToken<GAnnotation>
    }
    
    export type UnexpectedProperty<GAnnotation> = {
        readonly 'expectedProperties': pt.Dictionary<null>
        readonly 'groupDefinition': g_schema.T.group<GAnnotation>
        readonly 'token': g_h.T.SimpleStringToken<GAnnotation>
    }
}