window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12696","name":"V_bom_opcomponentscrap","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_bom_opcomponentscrap\r\nAs  select  h.OpComponentId,\r\n\t\t\tcoalesce(d.SortSeq,1) as sortseq ,    \r\n\t\t\tcoalesce(d.FromQty,0) as FromQty,\r\n\t\t\tcoalesce(d.ToQty,9999999999999999999999) as ToQty ,  \r\n\t\t\tcoalesce(d.CompScrap,h.CompScrap) as CompScrap,\r\n\t\t\tcoalesce(d.DefaultFlag,1) as DefaultFlag\r\n   from bom_opcomponent h left outer join bom_opcomponentscrap d on h.OpComponentId = d.OpComponentId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_bom_opcomponentscrap"},{"field":"Type","value":"View"}],"columns":[{"id":"column-317335","object_id":"column-317335","name":"OpComponentId","name_without_path":"OpComponentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317336","object_id":"column-317336","name":"sortseq","name_without_path":"sortseq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317337","object_id":"column-317337","name":"FromQty","name_without_path":"FromQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317338","object_id":"column-317338","name":"ToQty","name_without_path":"ToQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317339","object_id":"column-317339","name":"CompScrap","name_without_path":"CompScrap","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317340","object_id":"column-317340","name":"DefaultFlag","name_without_path":"DefaultFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};