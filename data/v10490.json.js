window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10490","name":"EB_View_ExpressCoAreaList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view EB_View_ExpressCoAreaList  \r\nas   \r\n --物流公司--配送区域视图  \r\n select Area.OID,Area.AutoID,area.cOrigProvinceID,OrigProv.vsimplename as cOrigProvinceName ,area.cOrigCityID,OrigCity.vsimpleName  as cOrigCityName ,\r\n area.corigContyID,OrigConty.vsimpleName  as cOrigContyName,\r\n area.cProvinceID,hr1.vsimplename as cProvinceName,Area.cCityID,hr2.vsimplename as cCityName,  \r\n Area.cContyID,HR3.vsimplename as cContyName,Area.bFlag,Area.cMemo,'normal' as editprop    \r\n from EB_ExpressCoArea as Area   \r\n left join HR_CT007 HR1 on Area.cProvinceID=HR1.ccodeID   \r\n left join HR_CT007 HR2 on Area.cCityID=Hr2.ccodeID  \r\n left join HR_CT007 HR3 on Area.cContyID=HR3.ccodeID   \r\n left join HR_CT007 OrigProv on Area.cOrigProvinceID=OrigProv.ccodeID   \r\n left join HR_CT007 OrigCity on Area.cOrigCityID=OrigCity.ccodeID  \r\n left join HR_CT007 OrigConty on Area.cOrigContyID=OrigConty.ccodeID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_ExpressCoAreaList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-191056","object_id":"column-191056","name":"OID","name_without_path":"OID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191057","object_id":"column-191057","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":true,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191058","object_id":"column-191058","name":"cOrigProvinceID","name_without_path":"cOrigProvinceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191059","object_id":"column-191059","name":"cOrigProvinceName","name_without_path":"cOrigProvinceName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191060","object_id":"column-191060","name":"cOrigCityID","name_without_path":"cOrigCityID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191061","object_id":"column-191061","name":"cOrigCityName","name_without_path":"cOrigCityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191062","object_id":"column-191062","name":"corigContyID","name_without_path":"corigContyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191063","object_id":"column-191063","name":"cOrigContyName","name_without_path":"cOrigContyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191064","object_id":"column-191064","name":"cProvinceID","name_without_path":"cProvinceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191065","object_id":"column-191065","name":"cProvinceName","name_without_path":"cProvinceName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191066","object_id":"column-191066","name":"cCityID","name_without_path":"cCityID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191067","object_id":"column-191067","name":"cCityName","name_without_path":"cCityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191068","object_id":"column-191068","name":"cContyID","name_without_path":"cContyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191069","object_id":"column-191069","name":"cContyName","name_without_path":"cContyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191070","object_id":"column-191070","name":"bFlag","name_without_path":"bFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191071","object_id":"column-191071","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191072","object_id":"column-191072","name":"editprop","name_without_path":"editprop","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};