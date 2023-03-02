import * as pt from 'pareto-core-types'

import * as gh from "glo-astn-handlers"
import * as gschema from "glo-astn-schema"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Dictionary {
        
        export type definition<GPAnnotation> = gschema.T.dictionary<T.Annotation<GPAnnotation>>
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Dictionary<GPAnnotation> = {
        readonly 'definition': gschema.T.dictionary<T.Annotation<GPAnnotation>>
        readonly 'token': [ false ] | [ true, gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace DictionaryClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type DictionaryClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Entry {
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Entry<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Group {
        
        export type definition<GPAnnotation> = gschema.T.group<T.Annotation<GPAnnotation>>
        
        export namespace _ltype {
            
            export namespace mixin {}
            
            export type mixin<GPAnnotation> = null
            
            export namespace omitted {}
            
            export type omitted<GPAnnotation> = null
            
            export type shorthand<GPAnnotation> = gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>
            
            export type verbose<GPAnnotation> = gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type _ltype<GPAnnotation> = 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
            | ['verbose', gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Group<GPAnnotation> = {
        readonly 'definition': gschema.T.group<T.Annotation<GPAnnotation>>
        readonly 'type': 
            | ['mixin', null]
            | ['omitted', null]
            | ['shorthand', gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
            | ['verbose', gh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace GroupClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type GroupClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, gh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace List {
        
        export type definition<GPAnnotation> = gschema.T.list<T.Annotation<GPAnnotation>>
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export type List<GPAnnotation> = {
        readonly 'definition': gschema.T.list<T.Annotation<GPAnnotation>>
        readonly 'token': [ false ] | [ true, gh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace ListClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.CloseArrayToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.CloseArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export type ListClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, gh.T.CloseArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace MultilineString {
        
        export type definition<GPAnnotation> = gschema.T.multiline__string<T.Annotation<GPAnnotation>>
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.MultilineStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.MultilineStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type MultilineString<GPAnnotation> = {
        readonly 'definition': gschema.T.multiline__string<T.Annotation<GPAnnotation>>
        readonly 'token': [ false ] | [ true, gh.T.MultilineStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Option {
        
        export type definition<GPAnnotation> = gschema.T.options<T.Annotation<GPAnnotation>>
        
        export type name<GPAnnotation> = string
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Option<GPAnnotation> = {
        readonly 'definition': gschema.T.options<T.Annotation<GPAnnotation>>
        readonly 'name': string
        readonly 'token': [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Property {
        
        export type definition<GPAnnotation> = gschema.T.value<T.Annotation<GPAnnotation>>
        
        export type key<GPAnnotation> = string
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Property<GPAnnotation> = {
        readonly 'definition': gschema.T.value<T.Annotation<GPAnnotation>>
        readonly 'key': string
        readonly 'token': [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace SimpleString {
        
        export type definition<GPAnnotation> = gschema.T.simple__string<T.Annotation<GPAnnotation>>
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
        
        export type value<GPAnnotation> = string
    }
    
    export type SimpleString<GPAnnotation> = {
        readonly 'definition': gschema.T.simple__string<T.Annotation<GPAnnotation>>
        readonly 'token': [ false ] | [ true, gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
        readonly 'value': string
    }
    
    export namespace TaggedUnion {
        
        export type definition<GPAnnotation> = gschema.T.tagged__union<T.Annotation<GPAnnotation>>
        
        export namespace token {
            
            export type O<GPAnnotation> = gh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, gh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>]
    }
    
    export type TaggedUnion<GPAnnotation> = {
        readonly 'definition': gschema.T.tagged__union<T.Annotation<GPAnnotation>>
        readonly 'token': [ false ] | [ true, gh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace TypeReference {
        
        export type definition<GPAnnotation> = gschema.T.type__reference<T.Annotation<GPAnnotation>>
    }
    
    export type TypeReference<GPAnnotation> = {
        readonly 'definition': gschema.T.type__reference<T.Annotation<GPAnnotation>>
    }
    
    export namespace UnexpectedOption {
        
        export type defaultOption<GPAnnotation> = string
        
        export namespace expectedOptions {
            
            export type D<GPAnnotation> = null
        }
        
        export type expectedOptions<GPAnnotation> = pt.Dictionary<null>
        
        export type token<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export type UnexpectedOption<GPAnnotation> = {
        readonly 'defaultOption': string
        readonly 'expectedOptions': pt.Dictionary<null>
        readonly 'token': gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export namespace UnexpectedProperty {
        
        export namespace expectedProperties {
            
            export type D<GPAnnotation> = null
        }
        
        export type expectedProperties<GPAnnotation> = pt.Dictionary<null>
        
        export type groupDefinition<GPAnnotation> = gschema.T.group<T.Annotation<GPAnnotation>>
        
        export type token<GPAnnotation> = gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export type UnexpectedProperty<GPAnnotation> = {
        readonly 'expectedProperties': pt.Dictionary<null>
        readonly 'groupDefinition': gschema.T.group<T.Annotation<GPAnnotation>>
        readonly 'token': gh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
}