window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13671","name":"v_mom_relqminspectvoucherid","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mom_relqminspectvoucherid\r\nAS \r\n   SELECT DispatchList.cbustype as csource,qminspectvoucher.id, qminspectvouchers.autoid,csourceid,rejectautoid,\r\n          sourceautoid = case when qminspectvouchers.CBYPRODUCT = 0 then sourceautoid else mom_orderdetail.MoDId end,\r\n\t  cchecktypecode,cbyproduct,qminspectvoucher.cvouchtype,ex_consignmentdetail.guids as guid_consignment   \r\n     FROM qminspectvoucher  \r\nleft join qminspectvouchers on qminspectvoucher.id=qminspectvouchers.id   \r\nleft join ex_consignmentdetail on qminspectvouchers.sourceautoid=ex_consignmentdetail.autoid  and cchecktypecode='EXP'  \r\nleft join DispatchList on DispatchList.DLID= qminspectvoucher.CSOURCEID and cchecktypecode='iss'\r\nleft join mom_moallocate on mom_moallocate.AllocateId = qminspectvouchers.SOURCEAUTOID and qminspectvouchers.CBYPRODUCT = 1\r\nleft join mom_orderdetail on mom_orderdetail.MoDId = mom_moallocate.MoDId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mom_relqminspectvoucherid"},{"field":"Type","value":"View"}],"columns":[{"id":"column-394708","object_id":"column-394708","name":"csource","name_without_path":"csource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394709","object_id":"column-394709","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394710","object_id":"column-394710","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394711","object_id":"column-394711","name":"csourceid","name_without_path":"csourceid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394712","object_id":"column-394712","name":"rejectautoid","name_without_path":"rejectautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394713","object_id":"column-394713","name":"sourceautoid","name_without_path":"sourceautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394714","object_id":"column-394714","name":"cchecktypecode","name_without_path":"cchecktypecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394715","object_id":"column-394715","name":"cbyproduct","name_without_path":"cbyproduct","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394716","object_id":"column-394716","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394717","object_id":"column-394717","name":"guid_consignment","name_without_path":"guid_consignment","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};