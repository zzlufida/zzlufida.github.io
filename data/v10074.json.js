window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10074","name":"caq_cobas2","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view caq_cobas2  as\r\nselect distinct a1.ParentId, d.wccode, d.DeptCode as dept from \r\nbom_parent a1, bom_bom a2, sfc_proutingpart a, sfc_prouting b, sfc_proutingdetail c ,sfc_workcenter d \r\nwhere a1.bomid=a2.bomid and a1.parentid=a.partid and \r\n       ((a2.VersionEffDate >= b.VersionEffDate and  a2.VersionEffDate < b.VersionEndDate and a2.BomType = 1) or\r\n        (a2.IdentCode = b.IdentCode and a2.BomType = 2)) and\r\na.PRoutingId=b.PRoutingId and b.PRoutingId=c.PRoutingId and c.wcid = d.wcid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_cobas2"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173659","object_id":"column-173659","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173660","object_id":"column-173660","name":"wccode","name_without_path":"wccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173661","object_id":"column-173661","name":"dept","name_without_path":"dept","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};