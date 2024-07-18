window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10112","name":"caq_invprice","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW caq_invprice\r\nAS\r\n\t--原材料\r\n\tselect cInvcode,iInvRCost,iPartId,cverID from ca_invprice\r\n\tunion\r\n\t--半成品\r\n\tselect '' as cInvCode,avg(ipdtunitAmo) as iInvRCost,B.ipartid,A.cVerID from\r\n\t(select cppid,sum(isnull(ipdtunitAmo,0)) as ipdtunitAmo,cVerID from caq_pland group by cppid,cVerid) A\r\n\tinner join caq_coplan B on A.cppid=B.iplancoid\r\n\tgroup by B.ipartid,cverid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_invprice"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174155","object_id":"column-174155","name":"cInvcode","name_without_path":"cInvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174156","object_id":"column-174156","name":"iInvRCost","name_without_path":"iInvRCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174157","object_id":"column-174157","name":"iPartId","name_without_path":"iPartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174158","object_id":"column-174158","name":"cverID","name_without_path":"cverID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};