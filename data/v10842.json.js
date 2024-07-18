window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10842","name":"GL_AllItemClass","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view GL_AllItemClass as select 'ch' as citem_class,'存货核算' as citem_name,cinvccode as citemccode,cinvcname as citemcname\r\n from inventoryclass  union SELECT '98' as citem_class,'现金流量项目' as citem_name,citemccode,citemcname\r\n  FROM fitemss98class  union SELECT '97' as citem_class,'项目管理' as citem_name,citemccode,citemcname\r\n  FROM fitemss97class  union SELECT '00' as citem_class,'培训与咨询' as citem_name,citemccode,citemcname\r\n  FROM fitemss00class  union SELECT 'ZF' as citem_class,'差异分析项目' as citem_name,citemccode,citemcname\r\n  FROM fitemssZFclass","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GL_AllItemClass"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207022","object_id":"column-207022","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207023","object_id":"column-207023","name":"citem_name","name_without_path":"citem_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207024","object_id":"column-207024","name":"citemccode","name_without_path":"citemccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207025","object_id":"column-207025","name":"citemcname","name_without_path":"citemcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};