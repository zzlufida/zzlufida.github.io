window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10461","name":"CRM_V_PartApplyToPartConsume2","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE   view CRM_V_PartApplyToPartConsume2      \r\nas      \r\n select \r\n distinct pad.partapply_d_id,\r\n pa.partapply_id as partapply_id,\r\n twd.ws_d_id as worksheet_d_id,\r\n pa.ufcode,\r\n pa.service_id,\r\n tw.ws_name,\r\n pad.sumoutqty,\r\n pad.sumrtnqty,\r\n pad.sumconsumeqty,       \r\n pa.finaluser_id,    \r\n fu.finaluser_name, \r\n pa.account_id,\r\n ta.account_name,   \r\n pa.dept_id,dt.dept_name,     \r\n  pa.owner_user_id,us.user_name,    \r\n pad.product_id,pd.prod_code,pd.cinvname,pd.cinvstd,    \r\n pd.ccomunitcode,unit.unit_name as ccomunitname,pad.saleunit_id,unit1.unit_name as saleunit_name,    \r\n pa.note as note,    \r\n twd.asset_id,\r\n asset.asset_name,\r\n -- pa.crm_timestamp,    \r\n convert(nchar, convert(money,pa.crm_timestamp), 2)AS crm_timestamp,   \r\n pdold.prod_id as product_id_old, \r\n twd.prod_volume as qty_old,\r\n pdold.prod_code as prod_code_old,pdold.cinvname as cinvname_old,    \r\n pdold.cinvstd as cinvstd_old,pdold.ccomunitcode as ccomunitcode_old,unitold.unit_name as ccomunitname_old,        \r\n pd.bInvBatch ,pd.bSerial ,    \r\n isnull(pad.sumoutqty,0)-isnull(pad.sumconsumeqty,0)-isnull(pad.sumrtnqty,0) as consumeqty,    \r\n CAST(NULL  AS NVARCHAR( 255)) AS oldcbatch,CAST(NULL  AS NVARCHAR( 200)) AS cbatch,CAST(NULL  AS NVARCHAR( 200)) AS cinvsn,\r\nCAST(NULL  AS NVARCHAR( 200)) as cinvsn_new,  \r\n twd.is_charge,  \r\n tes.enum_value as ischargedesc,\r\n CONVERT(varchar(100), twd.out_service_date, 23)  as out_service_date,\r\n tc_type.type_id,tc_type.type_name    \r\n FROM tc_partapply_d pad \r\n left JOIN tc_partapply pa ON  pa.partapply_id=pad.partapply_id   \r\n left join tc_worksheet tw on pa.service_id=tw.ws_id \r\n left join tc_worksheet_d twd on twd.ws_id=tw.ws_id and pad.ws_d_id=twd.ws_d_id\r\n left join tc_finaluser fu on pa.finaluser_id=fu.finaluser_id     \r\n left join tc_department dt on pa.dept_id=dt.dept_id     \r\n left join tc_user us on pa.owner_user_id=us.user_id     \r\n left join tc_product pd on pad.product_id=pd.prod_id   \r\n left join tc_account ta on pa.account_id=ta.account_id  \r\n LEFT JOIN tc_asset asset ON twd.asset_id =asset.asset_id     \r\n left join tc_unit unit on pd.ccomunitcode=unit.unit_id     \r\n left join tc_unit unit1 on pad.saleunit_id=unit1.unit_id      \r\n left join tc_product pdold on pad.product_id=pdold.prod_id     \r\n left join tc_unit unitold on pdold.ccomunitcode=unitold.unit_id     \r\n left join tc_enum_str tes on twd.is_charge=tes.enum_key and tes.attr_name='PartConsume.IsCharge' and tes.lang_id=2     \r\n LEFT JOIN (select obj_type,max(type_id) as type_id,max(type_name) as type_name,count(*)as num     \r\n from tc_type where obj_type in('550','1510','251') group by obj_type) tc_type ON tc_type.num =1 AND tc_type.obj_type ='550'     \r\n --left join tc_unit unitold1 on wsd.saleunit_id=unitold1.unit_id    \r\n    \r\nWHERE (isnull(pad.sumoutqty,0)-isnull(pad.sumconsumeqty,0)-isnull(pad.sumrtnqty,0) )>0--consumeqty    \r\nAND  isnull(pd.bInvBatch,0)=0 and  isnull(pd.bSerial,0)=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_V_PartApplyToPartConsume2"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189832","object_id":"column-189832","name":"partapply_d_id","name_without_path":"partapply_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189833","object_id":"column-189833","name":"partapply_id","name_without_path":"partapply_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189834","object_id":"column-189834","name":"worksheet_d_id","name_without_path":"worksheet_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189835","object_id":"column-189835","name":"ufcode","name_without_path":"ufcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189836","object_id":"column-189836","name":"service_id","name_without_path":"service_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189837","object_id":"column-189837","name":"ws_name","name_without_path":"ws_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189838","object_id":"column-189838","name":"sumoutqty","name_without_path":"sumoutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189839","object_id":"column-189839","name":"sumrtnqty","name_without_path":"sumrtnqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189840","object_id":"column-189840","name":"sumconsumeqty","name_without_path":"sumconsumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189841","object_id":"column-189841","name":"finaluser_id","name_without_path":"finaluser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189842","object_id":"column-189842","name":"finaluser_name","name_without_path":"finaluser_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"196","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189843","object_id":"column-189843","name":"account_id","name_without_path":"account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189844","object_id":"column-189844","name":"account_name","name_without_path":"account_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189845","object_id":"column-189845","name":"dept_id","name_without_path":"dept_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189846","object_id":"column-189846","name":"dept_name","name_without_path":"dept_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189847","object_id":"column-189847","name":"owner_user_id","name_without_path":"owner_user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189848","object_id":"column-189848","name":"user_name","name_without_path":"user_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189849","object_id":"column-189849","name":"product_id","name_without_path":"product_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189850","object_id":"column-189850","name":"prod_code","name_without_path":"prod_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189851","object_id":"column-189851","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189852","object_id":"column-189852","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189853","object_id":"column-189853","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189854","object_id":"column-189854","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189855","object_id":"column-189855","name":"saleunit_id","name_without_path":"saleunit_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189856","object_id":"column-189856","name":"saleunit_name","name_without_path":"saleunit_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189857","object_id":"column-189857","name":"note","name_without_path":"note","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189858","object_id":"column-189858","name":"asset_id","name_without_path":"asset_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189859","object_id":"column-189859","name":"asset_name","name_without_path":"asset_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189860","object_id":"column-189860","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189861","object_id":"column-189861","name":"product_id_old","name_without_path":"product_id_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189862","object_id":"column-189862","name":"qty_old","name_without_path":"qty_old","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189863","object_id":"column-189863","name":"prod_code_old","name_without_path":"prod_code_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189864","object_id":"column-189864","name":"cinvname_old","name_without_path":"cinvname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189865","object_id":"column-189865","name":"cinvstd_old","name_without_path":"cinvstd_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189866","object_id":"column-189866","name":"ccomunitcode_old","name_without_path":"ccomunitcode_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189867","object_id":"column-189867","name":"ccomunitname_old","name_without_path":"ccomunitname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189868","object_id":"column-189868","name":"bInvBatch","name_without_path":"bInvBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189869","object_id":"column-189869","name":"bSerial","name_without_path":"bSerial","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189870","object_id":"column-189870","name":"consumeqty","name_without_path":"consumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"26, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189871","object_id":"column-189871","name":"oldcbatch","name_without_path":"oldcbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189872","object_id":"column-189872","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189873","object_id":"column-189873","name":"cinvsn","name_without_path":"cinvsn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189874","object_id":"column-189874","name":"cinvsn_new","name_without_path":"cinvsn_new","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189875","object_id":"column-189875","name":"is_charge","name_without_path":"is_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189876","object_id":"column-189876","name":"ischargedesc","name_without_path":"ischargedesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189877","object_id":"column-189877","name":"out_service_date","name_without_path":"out_service_date","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189878","object_id":"column-189878","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189879","object_id":"column-189879","name":"type_name","name_without_path":"type_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};