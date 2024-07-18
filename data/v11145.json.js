window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11145","name":"hr_hi_PersonDeptAll","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view hr_hi_PersonDeptAll\r\nas\r\nselect isnull(t.cdepname1,'') +isnull(t.cdepname2,'')+isnull(t.cdepname3,'')+isnull(t.cdepname4,'')+isnull(t.cdepname5,'') as cDepNameAll,\r\n t.cdepcode1,t.cdepname1,t.cdepcode2,t.cdepname2,t.cdepcode3,t.cdepname3,t.cdepcode4,t.cdepname4,\r\nt.cdepcode5,t.cdepname5,t.cpsn_num,t.cpsn_name from (\r\nselect d1.cdepcode as cdepcode1,d1.cdepname as cdepname1,\r\nd2.cdepcode as cdepcode2,d2.cdepname as cdepname2,\r\nd3.cdepcode as cdepcode3,d3.cdepname as cdepname3,\r\nd4.cdepcode as cdepcode4,d4.cdepname as cdepname4,\r\nd5.cdepcode as cdepcode5,d5.cdepname as cdepname5,a.cpsn_num,a.cpsn_name\r\n from hr_hi_person a\r\nleft join department d1 on a.cdept_num like d1.cdepcode +'%'  and d1.idepgrade=1\r\nleft join department d2 on a.cdept_num like d2.cdepcode +'%'  and d2.idepgrade=2\r\nleft join department d3 on a.cdept_num like d3.cdepcode +'%'  and d3.idepgrade=3\r\nleft join department d4 on a.cdept_num like d4.cdepcode +'%'  and d4.idepgrade=4\r\nleft join department d5 on a.cdept_num like d5.cdepcode +'%'  and d5.idepgrade=5\r\n) T","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_hi_PersonDeptAll"},{"field":"Type","value":"View"}],"columns":[{"id":"column-222593","object_id":"column-222593","name":"cDepNameAll","name_without_path":"cDepNameAll","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1275","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222594","object_id":"column-222594","name":"cdepcode1","name_without_path":"cdepcode1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222595","object_id":"column-222595","name":"cdepname1","name_without_path":"cdepname1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222596","object_id":"column-222596","name":"cdepcode2","name_without_path":"cdepcode2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222597","object_id":"column-222597","name":"cdepname2","name_without_path":"cdepname2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222598","object_id":"column-222598","name":"cdepcode3","name_without_path":"cdepcode3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222599","object_id":"column-222599","name":"cdepname3","name_without_path":"cdepname3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222600","object_id":"column-222600","name":"cdepcode4","name_without_path":"cdepcode4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222601","object_id":"column-222601","name":"cdepname4","name_without_path":"cdepname4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222602","object_id":"column-222602","name":"cdepcode5","name_without_path":"cdepcode5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222603","object_id":"column-222603","name":"cdepname5","name_without_path":"cdepname5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222604","object_id":"column-222604","name":"cpsn_num","name_without_path":"cpsn_num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222605","object_id":"column-222605","name":"cpsn_name","name_without_path":"cpsn_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};