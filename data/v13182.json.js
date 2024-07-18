window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13182","name":"v_fc_moroutingbilldetailwcdep","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_fc_moroutingbilldetailwcdep\r\nas\r\n--报工单子表工作中心部门过滤\r\nselect distinct s.mid,w2.deptcode as outwcdepcode,w3.deptcode as inwcdepcode\r\nfrom fc_moroutingbilldetail as s \r\ninner join sfc_moroutingdetail as s2 on s.OutMoRoutingDId = s2.MoRoutingDId\r\nleft outer join sfc_workcenter as w2 on s2.WcId = w2.WcId\r\ninner join sfc_moroutingdetail as s3 on s.MoRoutingDId = s3.MoRoutingDId\r\nleft outer join sfc_workcenter as w3 on s3.WcId = w3.WcId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_fc_moroutingbilldetailwcdep"},{"field":"Type","value":"View"}],"columns":[{"id":"column-355669","object_id":"column-355669","name":"mid","name_without_path":"mid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-355670","object_id":"column-355670","name":"outwcdepcode","name_without_path":"outwcdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-355671","object_id":"column-355671","name":"inwcdepcode","name_without_path":"inwcdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};