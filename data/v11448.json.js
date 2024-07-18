window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11448","name":"HY_GetTransNextRouteQty","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create View HY_GetTransNextRouteQty\r\nAs\r\nSelect Hy_Receive.ddate,t.iqualifiedqty fQty,(case when isnull(c.iChangRate,0)=0 then t.iqualifiedqty else  t.iqualifiedqty /c.iChangRate  end) as fNum, \r\n\r\n nextP.PFDID,t.iMoOrderId ,t.iMoOrderDId ,\r\nt.cMoOrderCode cMoCode,t.iMoOrderSeq iMoSubSn,nextP.OpSeq iMoRouteSn,S.Opseq as iPreMoRouteSn,\r\nt.PartID\r\nfrom hy_Receivedetail t  \r\ninner join  sfc_processflowdetail S on s.PFDId =t.iMoRoutingDId  and t.cSource =2\r\ninner join sfc_processflowdetail nextP on nextP.pfid=s.pfid \r\nand nextP.OpSeq=(select min(t.OpSeq) from sfc_processflowdetail t where t.pfid = s.pfid and t.OpSeq > s.OpSeq) \r\ninner join Hy_Receive on Hy_Receive.ReceiveID = t.ReceiveID\r\ninner join inventory i on i.cinvcode = t.InvCode    \r\nleft outer join ComputationUnit c on c.cComunitCode = i.cSTComUnitCode \r\nwhere nextP.SubFlag = 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HY_GetTransNextRouteQty"},{"field":"Type","value":"View"}],"columns":[{"id":"column-230242","object_id":"column-230242","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230243","object_id":"column-230243","name":"fQty","name_without_path":"fQty","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230244","object_id":"column-230244","name":"fNum","name_without_path":"fNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230245","object_id":"column-230245","name":"PFDID","name_without_path":"PFDID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230246","object_id":"column-230246","name":"iMoOrderId","name_without_path":"iMoOrderId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230247","object_id":"column-230247","name":"iMoOrderDId","name_without_path":"iMoOrderDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230248","object_id":"column-230248","name":"cMoCode","name_without_path":"cMoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230249","object_id":"column-230249","name":"iMoSubSn","name_without_path":"iMoSubSn","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230250","object_id":"column-230250","name":"iMoRouteSn","name_without_path":"iMoRouteSn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230251","object_id":"column-230251","name":"iPreMoRouteSn","name_without_path":"iPreMoRouteSn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-230252","object_id":"column-230252","name":"PartID","name_without_path":"PartID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};