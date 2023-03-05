import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "handlers for tokens that are annotated with type information",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "glo-astn-schema": null,
        "glo-astn-handlers": null,
        "glo-astn-tokenconsumer": null,
    }),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({
            //"common": external("glo-pareto-common"),
            "schema": external("glo-astn-schema"),
            "h": external("glo-astn-handlers"),
        }),
    }],
}