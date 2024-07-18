window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10113","name":"caq_InvRate","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view caq_InvRate as\r\n    select distinct cinvcode,isnull(case iGroupType when 0 then 1  else iChangRate end,1) as iRate,case iGroupType when 2 then 1 else 0 end as bEditable\r\n        from inventory A with(nolock)\r\n            left join ComputationUnit B on A.cCAComUnitCode=B.cComUnitCode --and iGroupType = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_InvRate"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174159","object_id":"column-174159","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174160","object_id":"column-174160","name":"iRate","name_without_path":"iRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174161","object_id":"column-174161","name":"bEditable","name_without_path":"bEditable","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};