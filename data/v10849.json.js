window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10849","name":"GL_RptItemView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view GL_RptItemView as   SELECT '98' as citem_class,'现金流量项目' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n\ttItem.citemcode,tItem.citemname,case when tItem.bclose = 1 then '是' else '否' end as bclose  FROM fitemss98 tItem left join fitemss98class tItCs on tItem.citemccode = tItCs.citemccode  union  SELECT '97' as citem_class,'项目管理' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n\ttItem.citemcode,tItem.citemname,case when tItem.bclose = 1 then '是' else '否' end as bclose  FROM fitemss97 tItem left join fitemss97class tItCs on tItem.citemccode = tItCs.citemccode  union  SELECT '00' as citem_class,'培训与咨询' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n\ttItem.citemcode,tItem.citemname,case when tItem.bclose = 1 then '是' else '否' end as bclose  FROM fitemss00 tItem left join fitemss00class tItCs on tItem.citemccode = tItCs.citemccode  union  SELECT 'ZF' as citem_class,'差异分析项目' as citem_name,tItem.citemccode,tItCs.citemcname,\r\n\ttItem.citemcode,tItem.citemname,case when tItem.bclose = 1 then '是' else '否' end as bclose  FROM fitemssZF tItem left join fitemssZFclass tItCs on tItem.citemccode = tItCs.citemccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GL_RptItemView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207099","object_id":"column-207099","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207100","object_id":"column-207100","name":"citem_name","name_without_path":"citem_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207101","object_id":"column-207101","name":"citemccode","name_without_path":"citemccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207102","object_id":"column-207102","name":"citemcname","name_without_path":"citemcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207103","object_id":"column-207103","name":"citemcode","name_without_path":"citemcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207104","object_id":"column-207104","name":"citemname","name_without_path":"citemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207105","object_id":"column-207105","name":"bclose","name_without_path":"bclose","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};