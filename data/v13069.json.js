window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13069","name":"v_ex_process_executedetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* view: v_ex_process_executedetail                             */\r\n/*==============================================================*/\r\ncreate view v_ex_process_executedetail as \r\nselect '' as selcol ,ex_process_execute.guids, ex_process_execute.planguids ,ex_process_execute.cordercode ,ex_process_execute.iorderrowno , \r\nex_process_execute.ivouchstate, v_aa_enum.enumname as cvouchstate , ex_process_execute.cvouchtype  ,ex_process_execute.vouchguid , ex_process_execute.cvouchcode , ex_process_execute.dvouchdate , ex_process_execute.guid as vqdguid, v_refer_vqd_voucherdatasource.code as vqdcode, v_refer_vqd_voucherdatasource.name as vqdname, v_refer_vqd_voucherdatasource.remark as vqdremark,\r\nex_process_execute.cexecutedepcode , department.cdepname as cexecutedepname,\r\nex_process_execute.cexecutepersoncode , person.cpersonname as cexecutepersonname,\r\nex_process_execute.dactualbegin, ex_process_execute.dactualend, ex_process_execute.iactualperiod ,\r\nex_process_execute.cmaker ,ex_process_execute.cverifier ,ex_process_execute.dverifydate\t,ex_process_execute.baudit ,ex_process_execute.iorder,ex_process_execute.iexecutetime  ,ex_process_execute.cquotationcode\r\nfrom ex_process_execute \r\nleft join v_ex_vouchs v_refer_vqd_voucherdatasource on v_refer_vqd_voucherdatasource.guid = ex_process_execute.guid\r\nleft join department on department.cdepcode = ex_process_execute.cexecutedepcode\r\nleft join person on person.cpersoncode = ex_process_execute.cexecutepersoncode\r\nleft join v_aa_enum on v_aa_enum.enumindex = ex_process_execute.ivouchstate and v_aa_enum.enumtype='EX.Process.VouchState'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_process_executedetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-347297","object_id":"column-347297","name":"selcol","name_without_path":"selcol","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347298","object_id":"column-347298","name":"guids","name_without_path":"guids","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347299","object_id":"column-347299","name":"planguids","name_without_path":"planguids","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347300","object_id":"column-347300","name":"cordercode","name_without_path":"cordercode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347301","object_id":"column-347301","name":"iorderrowno","name_without_path":"iorderrowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347302","object_id":"column-347302","name":"ivouchstate","name_without_path":"ivouchstate","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347303","object_id":"column-347303","name":"cvouchstate","name_without_path":"cvouchstate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347304","object_id":"column-347304","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347305","object_id":"column-347305","name":"vouchguid","name_without_path":"vouchguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347306","object_id":"column-347306","name":"cvouchcode","name_without_path":"cvouchcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347307","object_id":"column-347307","name":"dvouchdate","name_without_path":"dvouchdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347308","object_id":"column-347308","name":"vqdguid","name_without_path":"vqdguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347309","object_id":"column-347309","name":"vqdcode","name_without_path":"vqdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347310","object_id":"column-347310","name":"vqdname","name_without_path":"vqdname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347311","object_id":"column-347311","name":"vqdremark","name_without_path":"vqdremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347312","object_id":"column-347312","name":"cexecutedepcode","name_without_path":"cexecutedepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347313","object_id":"column-347313","name":"cexecutedepname","name_without_path":"cexecutedepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347314","object_id":"column-347314","name":"cexecutepersoncode","name_without_path":"cexecutepersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347315","object_id":"column-347315","name":"cexecutepersonname","name_without_path":"cexecutepersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347316","object_id":"column-347316","name":"dactualbegin","name_without_path":"dactualbegin","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347317","object_id":"column-347317","name":"dactualend","name_without_path":"dactualend","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347318","object_id":"column-347318","name":"iactualperiod","name_without_path":"iactualperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347319","object_id":"column-347319","name":"cmaker","name_without_path":"cmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347320","object_id":"column-347320","name":"cverifier","name_without_path":"cverifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347321","object_id":"column-347321","name":"dverifydate","name_without_path":"dverifydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347322","object_id":"column-347322","name":"baudit","name_without_path":"baudit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347323","object_id":"column-347323","name":"iorder","name_without_path":"iorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347324","object_id":"column-347324","name":"iexecutetime","name_without_path":"iexecutetime","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347325","object_id":"column-347325","name":"cquotationcode","name_without_path":"cquotationcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};