window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10843","name":"GL_AllItemName","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view GL_AllItemName as select 'ch' as citem_class,'存货核算' as citem_name,\r\n inventory.cinvccode as citemccode,inventoryclass.cinvcname as citemcname,cInvCode as citemcode,cInvName as citemname,convert(bit,0) as bclose\r\n from inventory left join inventoryclass on inventory.cinvccode = inventoryclass.cinvccode union SELECT '98' as citem_class,'现金流量项目' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n  citemcode,citemname,bclose FROM fitemss98 tItem left join fitemss98class tItCs on tItem.citemccode = tItCs.citemccode  union SELECT '97' as citem_class,'项目管理' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n  citemcode,citemname,bclose FROM fitemss97 tItem left join fitemss97class tItCs on tItem.citemccode = tItCs.citemccode  union SELECT '00' as citem_class,'培训与咨询' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n  citemcode,citemname,bclose FROM fitemss00 tItem left join fitemss00class tItCs on tItem.citemccode = tItCs.citemccode  union SELECT 'ZF' as citem_class,'差异分析项目' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n  citemcode,citemname,bclose FROM fitemssZF tItem left join fitemssZFclass tItCs on tItem.citemccode = tItCs.citemccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GL_AllItemName"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207026","object_id":"column-207026","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207027","object_id":"column-207027","name":"citem_name","name_without_path":"citem_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207028","object_id":"column-207028","name":"citemccode","name_without_path":"citemccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207029","object_id":"column-207029","name":"citemcname","name_without_path":"citemcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207030","object_id":"column-207030","name":"citemcode","name_without_path":"citemcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207031","object_id":"column-207031","name":"citemname","name_without_path":"citemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207032","object_id":"column-207032","name":"bclose","name_without_path":"bclose","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};