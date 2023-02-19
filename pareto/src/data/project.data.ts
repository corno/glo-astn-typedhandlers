import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
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