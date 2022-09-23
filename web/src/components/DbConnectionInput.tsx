import * as db from "../db"
import StateInput from "./StateInput"


function DbConnectionInput<State extends db.DbState>(
    props: {
        type: db.DbType,
        key: keyof db.DbState['dbConnection'][db.DbType]
    }
) {
    return (
        <StateInput<string | number, State>
            get={(state) => state.dbConnection[props.type][props.key]}
            set={(state, value) => ({
                dbConnection: {
                    ...state.dbConnection,
                    [props.type]: {
                        ...state.dbConnection[props.type],
                        [props.key]: value
                    }
                } as { [key in db.DbType]: typeof state.dbConnection[typeof props.type] }
            } as State)} />
    )
}

export default DbConnectionInput
