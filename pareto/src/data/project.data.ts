import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "handlers for tokens that are annotated with type information",
    'license': "ISC",

    'dependencies': d({
        "glo-pareto-common": {},
        "glo-astn-schema": {},
        "glo-astn-handlers": {},
        "glo-astn-tokenconsumer": {},
    }),
    'type': ['glossary', {
        'glossary': glossary,
    }],
}