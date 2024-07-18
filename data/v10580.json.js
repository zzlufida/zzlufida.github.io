window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10580","name":"EB_View_WarehouseAreaList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view EB_View_WarehouseAreaList\r\nas \r\n\t--物流公司--配送区域视图\r\n\tselect Area.OID,Area.cWhCode,wh.cWhName,area.cProvinceID,hr1.vsimplename as cProvinceName,Area.cCityID,hr2.vsimplename as cCityName,area.cContyID, hr3.vsimpleName as cContyName,Area.cMemo,'normal' as editprop, Area.bFlag, CONVERT(CHAR, CONVERT(MONEY, Area.ufts),2) as ufts\r\n\tfrom EB_WarehouseArea as Area \r\n\tleft outer join Warehouse wh on Area.cWhCode = wh.cWhCode\r\n\tleft join HR_CT007 HR1 on Area.cProvinceID=HR1.ccodeID \r\n\tleft join HR_CT007 HR2 on Area.cCityID=Hr2.ccodeID\r\n\t left join HR_CT007 HR3 on Area.cContyID=HR3.ccodeID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_WarehouseAreaList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-196161","object_id":"column-196161","name":"OID","name_without_path":"OID","description":null,"is_pk":false,"is_identity":true,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196162","object_id":"column-196162","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196163","object_id":"column-196163","name":"cWhName","name_without_path":"cWhName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196164","object_id":"column-196164","name":"cProvinceID","name_without_path":"cProvinceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196165","object_id":"column-196165","name":"cProvinceName","name_without_path":"cProvinceName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196166","object_id":"column-196166","name":"cCityID","name_without_path":"cCityID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196167","object_id":"column-196167","name":"cCityName","name_without_path":"cCityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196168","object_id":"column-196168","name":"cContyID","name_without_path":"cContyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196169","object_id":"column-196169","name":"cContyName","name_without_path":"cContyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196170","object_id":"column-196170","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196171","object_id":"column-196171","name":"editprop","name_without_path":"editprop","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196172","object_id":"column-196172","name":"bFlag","name_without_path":"bFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196173","object_id":"column-196173","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};