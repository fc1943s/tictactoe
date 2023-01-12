type UH0 =
    | UH0_0 of Types.std.string.String * UH0
    | UH0_1
and Mut0 = {mutable l0 : UH0}
let rec method0 () : struct (string * string * string * bool) =
    let v0 : string = ""
    let v1 : obj = v0
    struct (v0, v0, v0, true)
and method1 () : string =
    let v0 : string = "./cli.rs"
    v0
and method2 (v0 : int32, v1 : string) : string =
    let v2 : int32 = String.length v1
    let v3 : bool = v2 < v0
    if v3 then
        let v4 : string = $"0{v1}"
        method2(v0, v4)
    else
        v1
and closure1 (v0 : Mut0) (v1 : Types.Vec<uint8>) : Result<bool, Types.std.io.Error> =
    let v2 : string = "std::string::String::from_utf8(($0).to_owned()).unwrap()"
    let v3 : Types.std.string.String = Fable.Core.Rust.emitExpr v1 v2
    let v4 : UH0 = v0.l0
    let v5 : UH0 = UH0_0(v3, v4)
    v0.l0 <- v5
    let v6 : Result<bool, Types.std.io.Error> = Ok true
    v6
and method3 (v0 : Mut0) : (Types.Vec<uint8> -> Result<bool, Types.std.io.Error>) =
    closure1(v0)
and method4 (v0 : UH0, v1 : UH0) : UH0 =
    match v0 with
    | UH0_0(v2, v3) -> (* Cons *)
        let v4 : UH0 = UH0_0(v2, v1)
        method4(v3, v4)
    | UH0_1 -> (* Nil *)
        v1
and method5 (v0 : UH0, v1 : string) : string =
    match v0 with
    | UH0_0(v2, v3) -> (* Cons *)
        let v4 : string = $"{v1}{v2}"
        method5(v3, v4)
    | UH0_1 -> (* Nil *)
        v1
and closure0 () () : int32 =
    let struct (v0 : string, v1 : string, v2 : string, v3 : bool) = method0()
    let v4 : string = "chrono::Utc::now()"
    let v5 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v6 : string = "($0).timestamp()"
    let v7 : int64 = Fable.Core.Rust.emitExpr v5 v6
    let v8 : string = method1()
    let v9 : string = "$0.as_str()"
    let v10 : Types.Ref<Types.Str> = Fable.Core.Rust.emitExpr v8 v9
    let v11 : string = "std::path::PathBuf::from($0)"
    let v12 : Types.std.path.PathBuf = Fable.Core.Rust.emitExpr v10 v11
    let struct (v13 : string, v14 : string, v15 : string, v16 : bool) = method0()
    let v17 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v18 : int64 = Fable.Core.Rust.emitExpr v17 v6
    let v19 : string = "($0).canonicalize()"
    let v20 : Result<Types.std.path.PathBuf, Types.std.io.Error> = Fable.Core.Rust.emitExpr v12 v19
    let v21 : string = "($0).as_ref().unwrap().to_path_buf()"
    let v22 : Types.std.path.PathBuf = Fable.Core.Rust.emitExpr v20 v21
    let v23 : string = "path_clean:"
    let v24 : string = "($0).to_string()"
    let v25 : Types.std.string.String = Fable.Core.Rust.emitExpr v23 v24
    let v26 : Types.EmitType<Types.std.string.String> = v25 |> unbox<Types.EmitType<Types.std.string.String>>
    let v27 : string = "fable_library_rust::String_::fromStr(&format!(\"{}\", $0.display()))"
    let v28 : string = Fable.Core.Rust.emitExpr v22 v27
    let v29 : Types.std.string.String = Fable.Core.Rust.emitExpr v28 v24
    let v30 : Types.EmitType<Types.std.string.String> = v29 |> unbox<Types.EmitType<Types.std.string.String>>
    let v31 : (Types.EmitType<Types.std.string.String> []) = [|v26; v30|]
    let v32 : string = "core::ops::Deref::deref($0)"
    let v33 : obj = Fable.Core.Rust.emitExpr v31 v32
    let v34 : string = "format!(\"{:?}\", ***$0)"
    let v35 : Types.std.string.String = Fable.Core.Rust.emitExpr v33 v34
    let v36 : Types.EmitType<Types.std.string.String> = v35 |> unbox<Types.EmitType<Types.std.string.String>>
    let v37 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v38 : int64 = Fable.Core.Rust.emitExpr v37 v6
    let v39 : int64 = v38 - v18
    let v40 : string = (v39).ToString ()
    let v41 : int32 = 6
    let v42 : string = method2(v41, v40)
    let v43 : string = "rand::random::<u8>()"
    let v44 : uint8 = Fable.Core.Rust.emitExpr () v43
    let v45 : string = "timestamp:"
    let v46 : Types.std.string.String = Fable.Core.Rust.emitExpr v45 v24
    let v47 : Types.EmitType<Types.std.string.String> = v46 |> unbox<Types.EmitType<Types.std.string.String>>
    let v48 : Types.std.string.String = Fable.Core.Rust.emitExpr v42 v24
    let v49 : Types.EmitType<Types.std.string.String> = v48 |> unbox<Types.EmitType<Types.std.string.String>>
    let v50 : string = "run_id:"
    let v51 : Types.std.string.String = Fable.Core.Rust.emitExpr v50 v24
    let v52 : Types.EmitType<Types.std.string.String> = v51 |> unbox<Types.EmitType<Types.std.string.String>>
    let v53 : string = "format!(\"{:?}\", $0)"
    let v54 : Types.std.string.String = Fable.Core.Rust.emitExpr v44 v53
    let v55 : Types.EmitType<Types.std.string.String> = v54 |> unbox<Types.EmitType<Types.std.string.String>>
    let v56 : (Types.EmitType<Types.std.string.String> []) = [|v47; v49; v52; v55|]
    let v57 : obj = Fable.Core.Rust.emitExpr v56 v32
    let v58 : Types.std.string.String = Fable.Core.Rust.emitExpr v57 v34
    let v59 : Types.EmitType<Types.std.string.String> = v58 |> unbox<Types.EmitType<Types.std.string.String>>
    let v60 : string = "> read_lines ()"
    let v61 : Types.std.string.String = Fable.Core.Rust.emitExpr v60 v24
    let v62 : Types.EmitType<Types.std.string.String> = v61 |> unbox<Types.EmitType<Types.std.string.String>>
    let v63 : (Types.EmitType<Types.std.string.String> []) = [|v62|]
    let v64 : obj = Fable.Core.Rust.emitExpr v63 v32
    let v65 : Types.std.string.String = Fable.Core.Rust.emitExpr v64 v34
    let v66 : Types.EmitType<Types.std.string.String> = v65 |> unbox<Types.EmitType<Types.std.string.String>>
    let v67 : string = "purple"
    let v68 : string = "colored::Colorize::color(&*$0, $1.to_string())"
    let v69 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v66, v67) v68
    let v70 : string = "format!(\"{}\", $0)"
    let v71 : Types.std.string.String = Fable.Core.Rust.emitExpr v69 v70
    let v72 : string = "666666"
    let v73 : string = v72.Substring (0, 2)
    let v74 : string = "u8::from_str_radix($0, 16).unwrap()"
    let v75 : uint8 = Fable.Core.Rust.emitExpr v73 v74
    let v76 : string = v72.Substring (2, 2)
    let v77 : uint8 = Fable.Core.Rust.emitExpr v76 v74
    let v78 : string = v72.Substring (4, 2)
    let v79 : uint8 = Fable.Core.Rust.emitExpr v78 v74
    let v80 : string = "colored::Colorize::truecolor(&*$0.to_string(), $1, $2, $3)"
    let v81 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v36, v75, v77, v79) v80
    let v82 : Types.std.string.String = Fable.Core.Rust.emitExpr v81 v70
    let v83 : string = "222222"
    let v84 : string = v83.Substring (0, 2)
    let v85 : uint8 = Fable.Core.Rust.emitExpr v84 v74
    let v86 : string = v83.Substring (2, 2)
    let v87 : uint8 = Fable.Core.Rust.emitExpr v86 v74
    let v88 : string = v83.Substring (4, 2)
    let v89 : uint8 = Fable.Core.Rust.emitExpr v88 v74
    let v90 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v59, v85, v87, v89) v80
    let v91 : Types.std.string.String = Fable.Core.Rust.emitExpr v90 v70
    let v92 : string = $"{v71} {v82} {v91}"
    System.Console.WriteLine v92
    let v93 : string = "std::fs::File::open($0)"
    let v94 : Result<Types.std.fs.File, Types.std.io.Error> = Fable.Core.Rust.emitExpr v22 v93
    let v95 : string = "$0.unwrap()"
    let v96 : Types.Ref<Types.std.fs.File> = Fable.Core.Rust.emitExpr v94 v95
    let v97 : string = "std::cell::RefCell::new(linereader::LineReader::new($0))"
    let v98 : Types.std.cell.RefCell<Types.linereader.LineReader<Types.Ref<Types.std.fs.File>>> = Fable.Core.Rust.emitExpr v96 v97
    let v99 : string = "reader:"
    let v100 : Types.std.string.String = Fable.Core.Rust.emitExpr v99 v24
    let v101 : Types.EmitType<Types.std.string.String> = v100 |> unbox<Types.EmitType<Types.std.string.String>>
    let v102 : Types.std.string.String = Fable.Core.Rust.emitExpr v98 v53
    let v103 : Types.EmitType<Types.std.string.String> = v102 |> unbox<Types.EmitType<Types.std.string.String>>
    let v104 : (Types.EmitType<Types.std.string.String> []) = [|v101; v103|]
    let v105 : obj = Fable.Core.Rust.emitExpr v104 v32
    let v106 : Types.std.string.String = Fable.Core.Rust.emitExpr v105 v34
    let v107 : Types.EmitType<Types.std.string.String> = v106 |> unbox<Types.EmitType<Types.std.string.String>>
    let v108 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v109 : int64 = Fable.Core.Rust.emitExpr v108 v6
    let v110 : int64 = v109 - v18
    let v111 : string = (v110).ToString ()
    let v112 : int32 = 6
    let v113 : string = method2(v112, v111)
    let v114 : uint8 = Fable.Core.Rust.emitExpr () v43
    let v115 : Types.std.string.String = Fable.Core.Rust.emitExpr v45 v24
    let v116 : Types.EmitType<Types.std.string.String> = v115 |> unbox<Types.EmitType<Types.std.string.String>>
    let v117 : Types.std.string.String = Fable.Core.Rust.emitExpr v113 v24
    let v118 : Types.EmitType<Types.std.string.String> = v117 |> unbox<Types.EmitType<Types.std.string.String>>
    let v119 : Types.std.string.String = Fable.Core.Rust.emitExpr v50 v24
    let v120 : Types.EmitType<Types.std.string.String> = v119 |> unbox<Types.EmitType<Types.std.string.String>>
    let v121 : Types.std.string.String = Fable.Core.Rust.emitExpr v114 v53
    let v122 : Types.EmitType<Types.std.string.String> = v121 |> unbox<Types.EmitType<Types.std.string.String>>
    let v123 : (Types.EmitType<Types.std.string.String> []) = [|v116; v118; v120; v122|]
    let v124 : obj = Fable.Core.Rust.emitExpr v123 v32
    let v125 : Types.std.string.String = Fable.Core.Rust.emitExpr v124 v34
    let v126 : Types.EmitType<Types.std.string.String> = v125 |> unbox<Types.EmitType<Types.std.string.String>>
    let v127 : Types.std.string.String = Fable.Core.Rust.emitExpr v60 v24
    let v128 : Types.EmitType<Types.std.string.String> = v127 |> unbox<Types.EmitType<Types.std.string.String>>
    let v129 : (Types.EmitType<Types.std.string.String> []) = [|v128|]
    let v130 : obj = Fable.Core.Rust.emitExpr v129 v32
    let v131 : Types.std.string.String = Fable.Core.Rust.emitExpr v130 v34
    let v132 : Types.EmitType<Types.std.string.String> = v131 |> unbox<Types.EmitType<Types.std.string.String>>
    let v133 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v132, v67) v68
    let v134 : Types.std.string.String = Fable.Core.Rust.emitExpr v133 v70
    let v135 : string = v72.Substring (0, 2)
    let v136 : uint8 = Fable.Core.Rust.emitExpr v135 v74
    let v137 : string = v72.Substring (2, 2)
    let v138 : uint8 = Fable.Core.Rust.emitExpr v137 v74
    let v139 : string = v72.Substring (4, 2)
    let v140 : uint8 = Fable.Core.Rust.emitExpr v139 v74
    let v141 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v107, v136, v138, v140) v80
    let v142 : Types.std.string.String = Fable.Core.Rust.emitExpr v141 v70
    let v143 : string = v83.Substring (0, 2)
    let v144 : uint8 = Fable.Core.Rust.emitExpr v143 v74
    let v145 : string = v83.Substring (2, 2)
    let v146 : uint8 = Fable.Core.Rust.emitExpr v145 v74
    let v147 : string = v83.Substring (4, 2)
    let v148 : uint8 = Fable.Core.Rust.emitExpr v147 v74
    let v149 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v126, v144, v146, v148) v80
    let v150 : Types.std.string.String = Fable.Core.Rust.emitExpr v149 v70
    let v151 : string = $"{v134} {v142} {v150}"
    System.Console.WriteLine v151
    let v152 : UH0 = UH0_1
    let v153 : Mut0 = {l0 = v152} : Mut0
    let v154 : (Types.Vec<uint8> -> Result<bool, Types.std.io.Error>) = method3(v153)
    let v155 : string = "($0).borrow_mut().for_each(move |x| $1(x.to_vec()))"
    let v156 : Result<unit, Types.std.io.Error> = Fable.Core.Rust.emitExpr struct (v98, v154) v155
    let v157 : string = "*(($0).as_ref()).unwrap()"
    Fable.Core.Rust.emitExpr v156 v157
    let v158 : UH0 = v153.l0
    let v159 : UH0 = UH0_1
    let v160 : UH0 = method4(v158, v159)
    let v161 : string = ""
    let v162 : string = method5(v160, v161)
    let v163 : string = "lines:"
    let v164 : Types.std.string.String = Fable.Core.Rust.emitExpr v163 v24
    let v165 : Types.EmitType<Types.std.string.String> = v164 |> unbox<Types.EmitType<Types.std.string.String>>
    let v166 : Types.std.string.String = Fable.Core.Rust.emitExpr v162 v24
    let v167 : Types.EmitType<Types.std.string.String> = v166 |> unbox<Types.EmitType<Types.std.string.String>>
    let v168 : (Types.EmitType<Types.std.string.String> []) = [|v165; v167|]
    let v169 : obj = Fable.Core.Rust.emitExpr v168 v32
    let v170 : Types.std.string.String = Fable.Core.Rust.emitExpr v169 v34
    let v171 : Types.EmitType<Types.std.string.String> = v170 |> unbox<Types.EmitType<Types.std.string.String>>
    let v172 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v173 : int64 = Fable.Core.Rust.emitExpr v172 v6
    let v174 : int64 = v173 - v18
    let v175 : string = (v174).ToString ()
    let v176 : int32 = 6
    let v177 : string = method2(v176, v175)
    let v178 : uint8 = Fable.Core.Rust.emitExpr () v43
    let v179 : Types.std.string.String = Fable.Core.Rust.emitExpr v45 v24
    let v180 : Types.EmitType<Types.std.string.String> = v179 |> unbox<Types.EmitType<Types.std.string.String>>
    let v181 : Types.std.string.String = Fable.Core.Rust.emitExpr v177 v24
    let v182 : Types.EmitType<Types.std.string.String> = v181 |> unbox<Types.EmitType<Types.std.string.String>>
    let v183 : Types.std.string.String = Fable.Core.Rust.emitExpr v50 v24
    let v184 : Types.EmitType<Types.std.string.String> = v183 |> unbox<Types.EmitType<Types.std.string.String>>
    let v185 : Types.std.string.String = Fable.Core.Rust.emitExpr v178 v53
    let v186 : Types.EmitType<Types.std.string.String> = v185 |> unbox<Types.EmitType<Types.std.string.String>>
    let v187 : (Types.EmitType<Types.std.string.String> []) = [|v180; v182; v184; v186|]
    let v188 : obj = Fable.Core.Rust.emitExpr v187 v32
    let v189 : Types.std.string.String = Fable.Core.Rust.emitExpr v188 v34
    let v190 : Types.EmitType<Types.std.string.String> = v189 |> unbox<Types.EmitType<Types.std.string.String>>
    let v191 : Types.std.string.String = Fable.Core.Rust.emitExpr v60 v24
    let v192 : Types.EmitType<Types.std.string.String> = v191 |> unbox<Types.EmitType<Types.std.string.String>>
    let v193 : (Types.EmitType<Types.std.string.String> []) = [|v192|]
    let v194 : obj = Fable.Core.Rust.emitExpr v193 v32
    let v195 : Types.std.string.String = Fable.Core.Rust.emitExpr v194 v34
    let v196 : Types.EmitType<Types.std.string.String> = v195 |> unbox<Types.EmitType<Types.std.string.String>>
    let v197 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v196, v67) v68
    let v198 : Types.std.string.String = Fable.Core.Rust.emitExpr v197 v70
    let v199 : string = v72.Substring (0, 2)
    let v200 : uint8 = Fable.Core.Rust.emitExpr v199 v74
    let v201 : string = v72.Substring (2, 2)
    let v202 : uint8 = Fable.Core.Rust.emitExpr v201 v74
    let v203 : string = v72.Substring (4, 2)
    let v204 : uint8 = Fable.Core.Rust.emitExpr v203 v74
    let v205 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v171, v200, v202, v204) v80
    let v206 : Types.std.string.String = Fable.Core.Rust.emitExpr v205 v70
    let v207 : string = v83.Substring (0, 2)
    let v208 : uint8 = Fable.Core.Rust.emitExpr v207 v74
    let v209 : string = v83.Substring (2, 2)
    let v210 : uint8 = Fable.Core.Rust.emitExpr v209 v74
    let v211 : string = v83.Substring (4, 2)
    let v212 : uint8 = Fable.Core.Rust.emitExpr v211 v74
    let v213 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v190, v208, v210, v212) v80
    let v214 : Types.std.string.String = Fable.Core.Rust.emitExpr v213 v70
    let v215 : string = $"{v198} {v206} {v214}"
    System.Console.WriteLine v215
    let v216 : (string []) = [||]
    let v217 : Types.std.string.String = Fable.Core.Rust.emitExpr v163 v24
    let v218 : Types.EmitType<Types.std.string.String> = v217 |> unbox<Types.EmitType<Types.std.string.String>>
    let v219 : Types.std.string.String = Fable.Core.Rust.emitExpr v216 v53
    let v220 : Types.EmitType<Types.std.string.String> = v219 |> unbox<Types.EmitType<Types.std.string.String>>
    let v221 : (Types.EmitType<Types.std.string.String> []) = [|v218; v220|]
    let v222 : obj = Fable.Core.Rust.emitExpr v221 v32
    let v223 : Types.std.string.String = Fable.Core.Rust.emitExpr v222 v34
    let v224 : Types.EmitType<Types.std.string.String> = v223 |> unbox<Types.EmitType<Types.std.string.String>>
    let v225 : Types.chrono.DateTime<Types.chrono.Utc> = Fable.Core.Rust.emitExpr () v4
    let v226 : int64 = Fable.Core.Rust.emitExpr v225 v6
    let v227 : int64 = v226 - v7
    let v228 : string = (v227).ToString ()
    let v229 : int32 = 6
    let v230 : string = method2(v229, v228)
    let v231 : uint8 = Fable.Core.Rust.emitExpr () v43
    let v232 : Types.std.string.String = Fable.Core.Rust.emitExpr v45 v24
    let v233 : Types.EmitType<Types.std.string.String> = v232 |> unbox<Types.EmitType<Types.std.string.String>>
    let v234 : Types.std.string.String = Fable.Core.Rust.emitExpr v230 v24
    let v235 : Types.EmitType<Types.std.string.String> = v234 |> unbox<Types.EmitType<Types.std.string.String>>
    let v236 : Types.std.string.String = Fable.Core.Rust.emitExpr v50 v24
    let v237 : Types.EmitType<Types.std.string.String> = v236 |> unbox<Types.EmitType<Types.std.string.String>>
    let v238 : Types.std.string.String = Fable.Core.Rust.emitExpr v231 v53
    let v239 : Types.EmitType<Types.std.string.String> = v238 |> unbox<Types.EmitType<Types.std.string.String>>
    let v240 : (Types.EmitType<Types.std.string.String> []) = [|v233; v235; v237; v239|]
    let v241 : obj = Fable.Core.Rust.emitExpr v240 v32
    let v242 : Types.std.string.String = Fable.Core.Rust.emitExpr v241 v34
    let v243 : Types.EmitType<Types.std.string.String> = v242 |> unbox<Types.EmitType<Types.std.string.String>>
    let v244 : string = "> app ()"
    let v245 : Types.std.string.String = Fable.Core.Rust.emitExpr v244 v24
    let v246 : Types.EmitType<Types.std.string.String> = v245 |> unbox<Types.EmitType<Types.std.string.String>>
    let v247 : (Types.EmitType<Types.std.string.String> []) = [|v246|]
    let v248 : obj = Fable.Core.Rust.emitExpr v247 v32
    let v249 : Types.std.string.String = Fable.Core.Rust.emitExpr v248 v34
    let v250 : Types.EmitType<Types.std.string.String> = v249 |> unbox<Types.EmitType<Types.std.string.String>>
    let v251 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v250, v67) v68
    let v252 : Types.std.string.String = Fable.Core.Rust.emitExpr v251 v70
    let v253 : string = v72.Substring (0, 2)
    let v254 : uint8 = Fable.Core.Rust.emitExpr v253 v74
    let v255 : string = v72.Substring (2, 2)
    let v256 : uint8 = Fable.Core.Rust.emitExpr v255 v74
    let v257 : string = v72.Substring (4, 2)
    let v258 : uint8 = Fable.Core.Rust.emitExpr v257 v74
    let v259 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v224, v254, v256, v258) v80
    let v260 : Types.std.string.String = Fable.Core.Rust.emitExpr v259 v70
    let v261 : string = v83.Substring (0, 2)
    let v262 : uint8 = Fable.Core.Rust.emitExpr v261 v74
    let v263 : string = v83.Substring (2, 2)
    let v264 : uint8 = Fable.Core.Rust.emitExpr v263 v74
    let v265 : string = v83.Substring (4, 2)
    let v266 : uint8 = Fable.Core.Rust.emitExpr v265 v74
    let v267 : Types.colored.ColoredString = Fable.Core.Rust.emitExpr struct (v243, v262, v264, v266) v80
    let v268 : Types.std.string.String = Fable.Core.Rust.emitExpr v267 v70
    let v269 : string = $"{v252} {v260} {v268}"
    System.Console.WriteLine v269
    0
let v0 : (unit -> int32) = closure0()
()
