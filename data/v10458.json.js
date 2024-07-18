window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10458","name":"CRM_V_PartApplySN2","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view [dbo].[CRM_V_PartApplySN2]      \r\nas       \r\n select  \r\n pad.partapply_d_id,  \r\n pad.partapply_id as partapply_id,\r\n wsd.ws_d_id as worksheet_d_id,\r\n pa.ufcode,\r\n pa.service_id,\r\n ws.ws_name,\r\n pad.sumoutqty,\r\n pad.sumrtnqty,\r\n pad.sumconsumeqty,       \r\n pa.finaluser_id,    \r\n fu.finaluser_name, \r\n pa.account_id,\r\n ta.account_name,   \r\n pa.dept_id,dt.dept_name,     \r\n  pa.owner_user_id,us.user_name,    \r\n pad.product_id,pd.prod_code,pd.cinvname,pd.cinvstd,    \r\n pd.ccomunitcode,unit.unit_name as ccomunitname,pad.saleunit_id,unit1.unit_name as saleunit_name,    \r\n pa.note as note,    \r\n wsd.asset_id,\r\n asset.asset_name,\r\n -- pa.crm_timestamp,    \r\n convert(nchar, convert(money,pa.crm_timestamp), 2)AS crm_timestamp,   \r\n pdold.prod_id as product_id_old, \r\n wsd.prod_volume as qty_old,\r\n pdold.prod_code as prod_code_old,pdold.cinvname as cinvname_old,    \r\n pdold.cinvstd as cinvstd_old,pdold.ccomunitcode as ccomunitcode_old,unitold.unit_name as ccomunitname_old,        \r\n pd.bInvBatch ,pd.bSerial ,    \r\n isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) as consumeqty ,    \r\n CAST(NULL  AS NVARCHAR( 255)) AS cbatch,CAST(NULL  AS NVARCHAR( 255)) AS oldcbatch,CAST(wsd.serial_number  AS NVARCHAR( 200)) AS cinvsn,\r\n rdouts.cinvsn as cinvsn_new,  \r\n wsd.is_charge,  \r\n tes.enum_value as ischargedesc,\r\n CONVERT(varchar(100), wsd.out_service_date, 23) as out_service_date,\r\n tc_type.type_id,tc_type.type_name  \r\n from tc_partapply_d pad   \r\n left join tc_partapply pa on pa.partapply_id=pad.partapply_id \r\n left join tc_account ta on pa.account_id=ta.account_id\r\n left join tc_worksheet_d wsd on wsd.ws_d_id=pad.ws_d_id \r\n left JOIN tc_worksheet ws ON wsd.ws_id =ws.ws_id   \r\n left join tc_finaluser fu on ws.finaluser_id=fu.finaluser_id   \r\n left join tc_department dt on ws.dept_id=dt.dept_id   \r\n left join tc_user us on pa.owner_user_id=us.user_id   \r\n left join tc_product pd on pad.product_id=pd.prod_id   \r\n LEFT JOIN tc_asset asset ON wsd.asset_id =asset.asset_id   \r\n left join tc_unit unit on pd.ccomunitcode=unit.unit_id   \r\n left join tc_unit unit1 on pad.saleunit_id=unit1.unit_id   \r\n left join tc_product pdold on wsd.prod_id=pdold.prod_id   \r\n left join tc_unit unitold on pdold.ccomunitcode=unitold.unit_id   \r\n left join tc_enum_str tes on wsd.is_charge=tes.enum_key and tes.attr_name='PartConsume.IsCharge' and tes.lang_id=2   \r\n LEFT JOIN (select obj_type,max(type_id) as type_id,max(type_name) as type_name,count(*)as num from tc_type where obj_type in('550','1510','251') group by obj_type) tc_type ON tc_type.num =1 AND tc_type.obj_type ='550'  \r\n  join (select rds.icrmvouchids as partapply_d_id,rds.cinvcode,snd.cinvsn, snd.cBatch,   \r\n 1 as iquantity from rdrecords09 rds join RdRecord09 rd on rd.id=rds.ID     \r\n join ST_SNDetail_OtherOut snd on rds.autoid=snd.ivouchsid     \r\n where rd.cbustype=N'配件出库' and isnull(snd.cinvsn,N'')<>N'') rdouts     \r\n on pad.partapply_d_id=rdouts.partapply_d_id     \r\n   \r\n left join (select partapply_d_id,sn,sum(isnull(consumeqty,0)) as consumeqty from tc_partconsume_d     \r\n where isnull(sn,N'')<>N'' group by partapply_d_id,sn) pcs     \r\n on rdouts.partapply_d_id=pcs.partapply_d_id and rdouts.cinvsn=pcs.sn     \r\n left join (select partapply_d_id,sn,sum(isnull(rtnqty,0)) as rtnqty from tc_partrtn_d     \r\n where isnull(sn,N'')<>N'' group by partapply_d_id,sn) prt     \r\n on rdouts.partapply_d_id=prt.partapply_d_id and rdouts.cinvsn=prt.sn     \r\n WHERE  isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) >0  \r\n AND  isnull(pd.bSerial,0)=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_V_PartApplySN2"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189694","object_id":"column-189694","name":"partapply_d_id","name_without_path":"partapply_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189695","object_id":"column-189695","name":"partapply_id","name_without_path":"partapply_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189696","object_id":"column-189696","name":"worksheet_d_id","name_without_path":"worksheet_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189697","object_id":"column-189697","name":"ufcode","name_without_path":"ufcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189698","object_id":"column-189698","name":"service_id","name_without_path":"service_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189699","object_id":"column-189699","name":"ws_name","name_without_path":"ws_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189700","object_id":"column-189700","name":"sumoutqty","name_without_path":"sumoutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189701","object_id":"column-189701","name":"sumrtnqty","name_without_path":"sumrtnqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189702","object_id":"column-189702","name":"sumconsumeqty","name_without_path":"sumconsumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189703","object_id":"column-189703","name":"finaluser_id","name_without_path":"finaluser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189704","object_id":"column-189704","name":"finaluser_name","name_without_path":"finaluser_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"196","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189705","object_id":"column-189705","name":"account_id","name_without_path":"account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189706","object_id":"column-189706","name":"account_name","name_without_path":"account_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189707","object_id":"column-189707","name":"dept_id","name_without_path":"dept_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189708","object_id":"column-189708","name":"dept_name","name_without_path":"dept_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189709","object_id":"column-189709","name":"owner_user_id","name_without_path":"owner_user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189710","object_id":"column-189710","name":"user_name","name_without_path":"user_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189711","object_id":"column-189711","name":"product_id","name_without_path":"product_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189712","object_id":"column-189712","name":"prod_code","name_without_path":"prod_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189713","object_id":"column-189713","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189714","object_id":"column-189714","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189715","object_id":"column-189715","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189716","object_id":"column-189716","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189717","object_id":"column-189717","name":"saleunit_id","name_without_path":"saleunit_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189718","object_id":"column-189718","name":"saleunit_name","name_without_path":"saleunit_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189719","object_id":"column-189719","name":"note","name_without_path":"note","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189720","object_id":"column-189720","name":"asset_id","name_without_path":"asset_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189721","object_id":"column-189721","name":"asset_name","name_without_path":"asset_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189722","object_id":"column-189722","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189723","object_id":"column-189723","name":"product_id_old","name_without_path":"product_id_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189724","object_id":"column-189724","name":"qty_old","name_without_path":"qty_old","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189725","object_id":"column-189725","name":"prod_code_old","name_without_path":"prod_code_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189726","object_id":"column-189726","name":"cinvname_old","name_without_path":"cinvname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189727","object_id":"column-189727","name":"cinvstd_old","name_without_path":"cinvstd_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189728","object_id":"column-189728","name":"ccomunitcode_old","name_without_path":"ccomunitcode_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189729","object_id":"column-189729","name":"ccomunitname_old","name_without_path":"ccomunitname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189730","object_id":"column-189730","name":"bInvBatch","name_without_path":"bInvBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189731","object_id":"column-189731","name":"bSerial","name_without_path":"bSerial","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189732","object_id":"column-189732","name":"consumeqty","name_without_path":"consumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189733","object_id":"column-189733","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189734","object_id":"column-189734","name":"oldcbatch","name_without_path":"oldcbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189735","object_id":"column-189735","name":"cinvsn","name_without_path":"cinvsn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189736","object_id":"column-189736","name":"cinvsn_new","name_without_path":"cinvsn_new","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189737","object_id":"column-189737","name":"is_charge","name_without_path":"is_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189738","object_id":"column-189738","name":"ischargedesc","name_without_path":"ischargedesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189739","object_id":"column-189739","name":"out_service_date","name_without_path":"out_service_date","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189740","object_id":"column-189740","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189741","object_id":"column-189741","name":"type_name","name_without_path":"type_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};