window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10456","name":"CRM_V_PartApplyBatch3","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view [dbo].[CRM_V_PartApplyBatch3]    \r\nas     \r\n select \r\n pad.partapply_d_id,\r\n pa.partapply_id as partapply_id,\r\n 0 as worksheet_d_id,\r\n pa.ufcode,\r\n pa.service_id,\r\n '' as ws_name,\r\n pad.sumoutqty,\r\n pad.sumrtnqty,\r\n pad.sumconsumeqty,       \r\n pa.finaluser_id,    \r\n fu.finaluser_name, \r\n pa.account_id,\r\n ta.account_name,   \r\n pa.dept_id,dt.dept_name,     \r\n  pa.owner_user_id,us.user_name,    \r\n pad.product_id,pd.prod_code,pd.cinvname,pd.cinvstd,    \r\n pd.ccomunitcode,unit.unit_name as ccomunitname,pad.saleunit_id,unit1.unit_name as saleunit_name,    \r\n pa.note as note,    \r\n 0 as asset_id,\r\n '' as asset_name,\r\n -- pa.crm_timestamp,    \r\n convert(nchar, convert(money,pa.crm_timestamp), 2)AS crm_timestamp,   \r\n '' as product_id_old, \r\n 0 as qty_old,\r\n '' as prod_code_old,pdold.cinvname as cinvname_old,    \r\n pdold.cinvstd as cinvstd_old,\r\n '' as ccomunitcode_old,'' as ccomunitname_old,        \r\n pd.bInvBatch ,pd.bSerial ,    \r\n isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) as consumeqty ,   \r\n  rdouts.cbatch AS cbatch,CAST(NULL  AS NVARCHAR( 255)) AS oldcbatch,CAST(NULL  AS NVARCHAR( 200)) AS cinvsn,\r\n CAST(NULL  AS NVARCHAR( 200)) AS cinvsn_new,  \r\n 1 as is_charge,  \r\n '' as ischargedesc,\r\n ''  as out_service_date,\r\n tc_type.type_id,tc_type.type_name     \r\n from tc_partapply_d pad   \r\n left join tc_partapply pa on pa.partapply_id=pad.partapply_id \r\n left join tc_account ta on pa.account_id=ta.account_id     \r\n --left join tc_worksheet_d wsd on wsd.ws_d_id=pad.ws_d_id   \r\n --JOIN tc_worksheet ws ON wsd.ws_id =ws.ws_id   \r\n left join tc_finaluser fu on pa.finaluser_id=fu.finaluser_id   \r\n left join tc_department dt on pa.dept_id=dt.dept_id   \r\n left join tc_user us on pa.owner_user_id=us.user_id   \r\n left join tc_product pd on pad.product_id=pd.prod_id   \r\n --LEFT JOIN tc_asset asset ON wsd.asset_id =asset.asset_id \r\n --left join tc_asset_d assetd on assetd.asset_id=asset.asset_id and pad.product_id=assetd.prod_id  \r\n left join tc_unit unit on pd.ccomunitcode=unit.unit_id   \r\n left join tc_unit unit1 on pad.saleunit_id=unit1.unit_id   \r\n left join tc_product pdold on pad.product_id=pdold.prod_id   \r\n left join tc_unit unitold on pdold.ccomunitcode=unitold.unit_id   \r\n --left join tc_enum_str tes on wsd.is_charge=tes.enum_key and tes.attr_name='PartConsume.IsCharge' and tes.lang_id=2   \r\n LEFT JOIN (select obj_type,max(type_id) as type_id,max(type_name) as type_name,count(*)as num from tc_type where obj_type in('550','1510','251') group by obj_type) tc_type ON tc_type.num =1 AND tc_type.obj_type ='550'  \r\n JOIN   \r\n (select rds.icrmvouchids as partapply_d_id,rds.cinvcode,rds.cbatch,  \r\n sum(isnull(rds.iquantity,0)) as iquantity from rdrecords09 rds join RdRecord09 rd on rd.id=rds.ID   \r\n where rd.cbustype=N'配件出库' and isnull(rds.cbatch,N'')<>N'' group by rds.icrmvouchids,rds.cinvcode,rds.cbatch) rdouts   \r\n on pad.partapply_d_id=rdouts.partapply_d_id    \r\n left join    \r\n (select partapply_d_id,cbatch,sum(isnull(consumeqty,0)) as consumeqty from tc_partconsume_d   \r\n where isnull(cbatch,N'')<>N'' group by partapply_d_id,cbatch) pcs   \r\n on rdouts.partapply_d_id=pcs.partapply_d_id and rdouts.cbatch=pcs.cbatch   \r\n left join (select partapply_d_id,cbach,sum(isnull(rtnqty,0)) as rtnqty from tc_partrtn_d   \r\n where isnull(cbach,N'')<>N'' group by partapply_d_id,cbach) prt   \r\n on rdouts.partapply_d_id=prt.partapply_d_id and rdouts.cbatch=prt.cbach   \r\n WHERE  isnull(rdouts.iquantity,0)-isnull(pcs.consumeqty,0)-isnull(prt.rtnqty,0) >0  \r\n AND  isnull(pd.bInvBatch,0)=1 and  isnull(pd.bSerial,0)=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_V_PartApplyBatch3"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189604","object_id":"column-189604","name":"partapply_d_id","name_without_path":"partapply_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189605","object_id":"column-189605","name":"partapply_id","name_without_path":"partapply_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189606","object_id":"column-189606","name":"worksheet_d_id","name_without_path":"worksheet_d_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189607","object_id":"column-189607","name":"ufcode","name_without_path":"ufcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189608","object_id":"column-189608","name":"service_id","name_without_path":"service_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189609","object_id":"column-189609","name":"ws_name","name_without_path":"ws_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189610","object_id":"column-189610","name":"sumoutqty","name_without_path":"sumoutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189611","object_id":"column-189611","name":"sumrtnqty","name_without_path":"sumrtnqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189612","object_id":"column-189612","name":"sumconsumeqty","name_without_path":"sumconsumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"24, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189613","object_id":"column-189613","name":"finaluser_id","name_without_path":"finaluser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189614","object_id":"column-189614","name":"finaluser_name","name_without_path":"finaluser_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"196","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189615","object_id":"column-189615","name":"account_id","name_without_path":"account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189616","object_id":"column-189616","name":"account_name","name_without_path":"account_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189617","object_id":"column-189617","name":"dept_id","name_without_path":"dept_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189618","object_id":"column-189618","name":"dept_name","name_without_path":"dept_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189619","object_id":"column-189619","name":"owner_user_id","name_without_path":"owner_user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189620","object_id":"column-189620","name":"user_name","name_without_path":"user_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189621","object_id":"column-189621","name":"product_id","name_without_path":"product_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189622","object_id":"column-189622","name":"prod_code","name_without_path":"prod_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189623","object_id":"column-189623","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189624","object_id":"column-189624","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189625","object_id":"column-189625","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189626","object_id":"column-189626","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189627","object_id":"column-189627","name":"saleunit_id","name_without_path":"saleunit_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189628","object_id":"column-189628","name":"saleunit_name","name_without_path":"saleunit_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189629","object_id":"column-189629","name":"note","name_without_path":"note","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189630","object_id":"column-189630","name":"asset_id","name_without_path":"asset_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189631","object_id":"column-189631","name":"asset_name","name_without_path":"asset_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189632","object_id":"column-189632","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189633","object_id":"column-189633","name":"product_id_old","name_without_path":"product_id_old","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189634","object_id":"column-189634","name":"qty_old","name_without_path":"qty_old","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189635","object_id":"column-189635","name":"prod_code_old","name_without_path":"prod_code_old","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189636","object_id":"column-189636","name":"cinvname_old","name_without_path":"cinvname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189637","object_id":"column-189637","name":"cinvstd_old","name_without_path":"cinvstd_old","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189638","object_id":"column-189638","name":"ccomunitcode_old","name_without_path":"ccomunitcode_old","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189639","object_id":"column-189639","name":"ccomunitname_old","name_without_path":"ccomunitname_old","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189640","object_id":"column-189640","name":"bInvBatch","name_without_path":"bInvBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189641","object_id":"column-189641","name":"bSerial","name_without_path":"bSerial","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189642","object_id":"column-189642","name":"consumeqty","name_without_path":"consumeqty","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189643","object_id":"column-189643","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189644","object_id":"column-189644","name":"oldcbatch","name_without_path":"oldcbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189645","object_id":"column-189645","name":"cinvsn","name_without_path":"cinvsn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189646","object_id":"column-189646","name":"cinvsn_new","name_without_path":"cinvsn_new","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189647","object_id":"column-189647","name":"is_charge","name_without_path":"is_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189648","object_id":"column-189648","name":"ischargedesc","name_without_path":"ischargedesc","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189649","object_id":"column-189649","name":"out_service_date","name_without_path":"out_service_date","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189650","object_id":"column-189650","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189651","object_id":"column-189651","name":"type_name","name_without_path":"type_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};