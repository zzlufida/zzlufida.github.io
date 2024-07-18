window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10455","name":"CRM_V_PartApplyBatch2","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view [dbo].[CRM_V_PartApplyBatch2]    \r\nas     \r\n select \r\n pad.partapply_d_id,\r\n pa.partapply_id as partapply_id,\r\n wsd.ws_d_id as worksheet_d_id,\r\n pa.ufcode,\r\n pa.service_id,\r\n ws.ws_name,\r\n pad.sumoutqty,\r\n pad.sumrtnqty,\r\n pad.sumconsumeqty,       \r\n pa.finaluser_id,    \r\n fu.finaluser_name, \r\n pa.account_id,\r\n ta.account_name,   \r\n pa.dept_id,dt.dept_name,     \r\n  pa.owner_user_id,us.user_name,    \r\n pad.product_id,pd.prod_code,pd.cinvname,pd.cinvstd,    \r\n pd.ccomunitcode,unit.unit_name as ccomunitname,pad.saleunit_id,unit1.unit_name as saleunit_name,    \r\n pa.note as note,    \r\n wsd.asset_id,\r\n asset.asset_name,\r\n -- pa.crm_timestamp,    \r\n convert(nchar, convert(money,pa.crm_timestamp), 2)AS crm_timestamp,   \r\n pdold.prod_id as product_id_old, \r\n wsd.prod_volume as qty_old,\r\n pdold.prod_code as prod_code_old,pdold.cinvname as cinvname_old,    \r\n pdold.cinvstd as cinvstd_old,pdold.ccomunitcode as ccomunitcode_old,unitold.unit_name as ccomunitname_old,        \r\n pd.bInvBatch ,pd.bSerial ,    \r\n isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) as consumeqty,    \r\n CAST(assetd.cBatch  AS NVARCHAR( 255)) AS oldcbatch,rdouts.cbatch as cbatch,CAST(NULL  AS NVARCHAR( 200)) AS cinvsn,  \r\nCAST(NULL  AS NVARCHAR( 200)) as cinvsn_new,\r\n wsd.is_charge,  \r\n tes.enum_value as ischargedesc,\r\n CONVERT(varchar(100), wsd.out_service_date, 23)  as out_service_date,\r\n tc_type.type_id,tc_type.type_name     \r\n from tc_partapply_d pad   \r\n left join tc_partapply pa on pa.partapply_id=pad.partapply_id \r\n left join tc_account ta on pa.account_id=ta.account_id     \r\n left join tc_worksheet_d wsd on wsd.ws_d_id=pad.ws_d_id   \r\n JOIN tc_worksheet ws ON wsd.ws_id =ws.ws_id   \r\n left join tc_finaluser fu on ws.finaluser_id=fu.finaluser_id   \r\n left join tc_department dt on ws.dept_id=dt.dept_id   \r\n left join tc_user us on pa.owner_user_id=us.user_id   \r\n left join tc_product pd on pad.product_id=pd.prod_id   \r\n LEFT JOIN tc_asset asset ON wsd.asset_id =asset.asset_id \r\n left join tc_asset_d assetd on assetd.asset_id=asset.asset_id and pad.product_id=assetd.prod_id  \r\n left join tc_unit unit on pd.ccomunitcode=unit.unit_id   \r\n left join tc_unit unit1 on pad.saleunit_id=unit1.unit_id   \r\n left join tc_product pdold on wsd.prod_id=pdold.prod_id   \r\n left join tc_unit unitold on pdold.ccomunitcode=unitold.unit_id   \r\n left join tc_enum_str tes on wsd.is_charge=tes.enum_key and tes.attr_name='PartConsume.IsCharge' and tes.lang_id=2   \r\n LEFT JOIN (select obj_type,max(type_id) as type_id,max(type_name) as type_name,count(*)as num from tc_type where obj_type in('550','1510','251') group by obj_type) tc_type ON tc_type.num =1 AND tc_type.obj_type ='550'  \r\n JOIN   \r\n (select rds.icrmvouchids as partapply_d_id,rds.cinvcode,rds.cbatch,  \r\n sum(isnull(rds.iquantity,0)) as iquantity from rdrecords09 rds join RdRecord09 rd on rd.id=rds.ID   \r\n where rd.cbustype=N'配件出库' and isnull(rds.cbatch,N'')<>N'' group by rds.icrmvouchids,rds.cinvcode,rds.cbatch) rdouts   \r\n on pad.partapply_d_id=rdouts.partapply_d_id    \r\n left join    \r\n (select partapply_d_id,cbatch,sum(isnull(consumeqty,0)) as consumeqty from tc_partconsume_d   \r\n where isnull(cbatch,N'')<>N'' group by partapply_d_id,cbatch) pcs   \r\n on rdouts.partapply_d_id=pcs.partapply_d_id and rdouts.cbatch=pcs.cbatch   \r\n left join (select partapply_d_id,cbach,sum(isnull(rtnqty,0)) as rtnqty from tc_partrtn_d   \r\n where isnull(cbach,N'')<>N'' group by partapply_d_id,cbach) prt   \r\n on rdouts.partapply_d_id=prt.partapply_d_id and rdouts.cbatch=prt.cbach   \r\n WHERE  isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) >0  \r\n AND  isnull(pd.bInvBatch,0)=1 and  isnull(pd.bSerial,0)=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_V_PartApplyBatch2"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189556","object_id":"column-189556","name":"partapply_d_id","name_without_path":"partapply_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189557","object_id":"column-189557","name":"partapply_id","name_without_path":"partapply_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189558","object_id":"column-189558","name":"worksheet_d_id","name_without_path":"worksheet_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189559","object_id":"column-189559","name":"ufcode","name_without_path":"ufcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189560","object_id":"column-189560","name":"service_id","name_without_path":"service_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189561","object_id":"column-189561","name":"ws_name","name_without_path":"ws_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189562","object_id":"column-189562","name":"sumoutqty","name_without_path":"sumoutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189563","object_id":"column-189563","name":"sumrtnqty","name_without_path":"sumrtnqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189564","object_id":"column-189564","name":"sumconsumeqty","name_without_path":"sumconsumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189565","object_id":"column-189565","name":"finaluser_id","name_without_path":"finaluser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189566","object_id":"column-189566","name":"finaluser_name","name_without_path":"finaluser_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"196","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189567","object_id":"column-189567","name":"account_id","name_without_path":"account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189568","object_id":"column-189568","name":"account_name","name_without_path":"account_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189569","object_id":"column-189569","name":"dept_id","name_without_path":"dept_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189570","object_id":"column-189570","name":"dept_name","name_without_path":"dept_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189571","object_id":"column-189571","name":"owner_user_id","name_without_path":"owner_user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189572","object_id":"column-189572","name":"user_name","name_without_path":"user_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189573","object_id":"column-189573","name":"product_id","name_without_path":"product_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189574","object_id":"column-189574","name":"prod_code","name_without_path":"prod_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189575","object_id":"column-189575","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189576","object_id":"column-189576","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189577","object_id":"column-189577","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189578","object_id":"column-189578","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189579","object_id":"column-189579","name":"saleunit_id","name_without_path":"saleunit_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189580","object_id":"column-189580","name":"saleunit_name","name_without_path":"saleunit_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189581","object_id":"column-189581","name":"note","name_without_path":"note","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189582","object_id":"column-189582","name":"asset_id","name_without_path":"asset_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189583","object_id":"column-189583","name":"asset_name","name_without_path":"asset_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189584","object_id":"column-189584","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189585","object_id":"column-189585","name":"product_id_old","name_without_path":"product_id_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189586","object_id":"column-189586","name":"qty_old","name_without_path":"qty_old","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189587","object_id":"column-189587","name":"prod_code_old","name_without_path":"prod_code_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189588","object_id":"column-189588","name":"cinvname_old","name_without_path":"cinvname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189589","object_id":"column-189589","name":"cinvstd_old","name_without_path":"cinvstd_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189590","object_id":"column-189590","name":"ccomunitcode_old","name_without_path":"ccomunitcode_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189591","object_id":"column-189591","name":"ccomunitname_old","name_without_path":"ccomunitname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189592","object_id":"column-189592","name":"bInvBatch","name_without_path":"bInvBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189593","object_id":"column-189593","name":"bSerial","name_without_path":"bSerial","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189594","object_id":"column-189594","name":"consumeqty","name_without_path":"consumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189595","object_id":"column-189595","name":"oldcbatch","name_without_path":"oldcbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189596","object_id":"column-189596","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189597","object_id":"column-189597","name":"cinvsn","name_without_path":"cinvsn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189598","object_id":"column-189598","name":"cinvsn_new","name_without_path":"cinvsn_new","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189599","object_id":"column-189599","name":"is_charge","name_without_path":"is_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189600","object_id":"column-189600","name":"ischargedesc","name_without_path":"ischargedesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189601","object_id":"column-189601","name":"out_service_date","name_without_path":"out_service_date","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189602","object_id":"column-189602","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189603","object_id":"column-189603","name":"type_name","name_without_path":"type_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};