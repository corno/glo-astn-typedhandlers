import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "handlers for tokens that are annotated with type information",
    'license': "TBD",

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