window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10847","name":"GL_QCashSumTable","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  View [dbo].[GL_QCashSumTable]\r\nAs\r\nselect min(GL_v_CashTable.i_id) as i_id ,min(dbill_date) as dbill_date,count(GL_v_CashTable.i_id) as iCount,iperiod,iSignSeq,iNo_id,inid,cCashItem,GL_v_CashTable.ccode,gl_v_cashtable.cexch_name,\r\nSum(md) As md,Sum(mc) As mc,Sum(md_f) As md_f,Sum(mc_f) As mc_f,Sum(nd_s) As nd_s,Sum(nc_s) As nc_s,(bDept | bPerson | bCus | bSup | bItem | bcdefine1 | bcdefine2 | bcdefine3 | bcdefine5  | bcdefine7 | bcdefine8 | bcdefine9 | bcdefine10 | bcdefine11 | bcdefine12 | bcdefine13 | bcdefine14 | bcdefine15 | bcdefine16) as haveass\r\nfrom GL_v_CashTable inner join GL_v_code on GL_v_CashTable.ccode=GL_v_code.ccode \r\nGroup by iperiod,iSignSeq,iNo_id,inid,cCashItem,GL_v_CashTable.ccode,\r\ngl_v_cashtable.cexch_name,GL_v_code.bDept ,GL_v_code.bPerson ,GL_v_code.bCus ,GL_v_code.bSup ,GL_v_code.bItem ,GL_v_code.bcdefine1 ,GL_v_code.bcdefine2 ,GL_v_code.bcdefine3 ,GL_v_code.bcdefine5  ,GL_v_code.bcdefine7 ,GL_v_code.bcdefine8 ,GL_v_code.bcdefine9 ,GL_v_code.bcdefine10 ,GL_v_code.bcdefine11 ,GL_v_code.bcdefine12 ,GL_v_code.bcdefine13 ,GL_v_code.bcdefine14 ,GL_v_code.bcdefine15 ,GL_v_code.bcdefine16","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GL_QCashSumTable"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207066","object_id":"column-207066","name":"i_id","name_without_path":"i_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207067","object_id":"column-207067","name":"dbill_date","name_without_path":"dbill_date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207068","object_id":"column-207068","name":"iCount","name_without_path":"iCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207069","object_id":"column-207069","name":"iperiod","name_without_path":"iperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207070","object_id":"column-207070","name":"iSignSeq","name_without_path":"iSignSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207071","object_id":"column-207071","name":"iNo_id","name_without_path":"iNo_id","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207072","object_id":"column-207072","name":"inid","name_without_path":"inid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207073","object_id":"column-207073","name":"cCashItem","name_without_path":"cCashItem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207074","object_id":"column-207074","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207075","object_id":"column-207075","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207076","object_id":"column-207076","name":"md","name_without_path":"md","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207077","object_id":"column-207077","name":"mc","name_without_path":"mc","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207078","object_id":"column-207078","name":"md_f","name_without_path":"md_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207079","object_id":"column-207079","name":"mc_f","name_without_path":"mc_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207080","object_id":"column-207080","name":"nd_s","name_without_path":"nd_s","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207081","object_id":"column-207081","name":"nc_s","name_without_path":"nc_s","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207082","object_id":"column-207082","name":"haveass","name_without_path":"haveass","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};