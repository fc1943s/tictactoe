import Row from "./Row"
import * as util from "../../../lib_ts/util"
import { Diff } from "../diff/Diff"
import Chain from "./Chain"
import Counter from "./Counter"
import Database from "./Database"
import Links from "./Links"
import Settings from "./Settings"
import ChainStatus from "./ChainStatus"
import ChainDeploy from "./ChainDeploy"
import BaseTable from "./BaseTable"
import { Box } from "@hope-ui/solid"


function Content() {
    return (
        <Box
            overflow="auto"
            display="flex"
            flex={1}
            flexDirection="column"
            maxWidth="100vw"
            height="100vh"
            backgroundColor="$bg"
            fontSize="$sm"
            color="$text1"
            padding="1px"
        >
            <BaseTable
                display="flex"
                flex={1}
                flexDirection="column"
            >
                <Row
                    title="Links"
                >
                    <Links />
                </Row>
                <Row />
                <Row
                    title="Settings"
                >
                    <Settings />
                </Row>
                <Row />
                <Row
                    loader={false}
                    title="Chain"
                >
                    <Chain />
                </Row>
                <Row />
                <Row
                    id="db"
                    loader={false}
                    title="Database"
                >
                    <Database />
                </Row>
                <Row />
                <Row
                    title="Profile"
                >
                    <BaseTable>
                        <Counter />
                        {!!util.env.GITHUB_RUN_ID
                            ? <>
                                <Row
                                    title="Chain Status"
                                >
                                    <ChainStatus />
                                </Row>
                                <Row
                                    title="Chain Deploy"
                                >
                                    <ChainDeploy />
                                </Row>
                            </>
                            : <></>}
                        {/* {!util.IS_TEST && !util.env.GITHUB_RUN_ID
                    ? <>
                        <Row />
                        <Row title="Diff">
                            <Diff />
                        </Row>
                    </>
                    : <></>} */}
                    </BaseTable>
                </Row>
            </BaseTable>
        </Box>
    )
}

export default Content
