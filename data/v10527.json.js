window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10527","name":"EB_View_OrderQuantity","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW [dbo].[EB_View_OrderQuantity]  \r\nAS  \r\nSELECT     ISNULL(SUM((oo.num - isnull(oo.refund_num,0)) * isnull(u.ichangrate,1)), 0) AS iebnum,ISNULL(SUM(oo.num - isnull(oo.refund_num,0)), 0) AS iebunitnum,ii.cInvCode, oo.cWhCode, ISNULL(oo.cFree1, N'') AS cFree1, ISNULL(oo.cFree2, N'') AS cFree2, ISNULL(oo.cFree3,  N'') AS cFree3, ISNULL(oo.cFree4, N'') AS cFree4, ISNULL(oo.cFree5, N'') AS cFree5, ISNULL(oo.cFree6, N'') AS cFree6, ISNULL(oo.cFree7, N'')   AS cFree7, ISNULL(oo.cFree8, N'') AS cFree8, ISNULL(oo.cFree9, N'') AS cFree9, ISNULL(oo.cFree10, N'') AS cfree10  \r\nFROM         dbo.EB_Order AS oo INNER JOIN  \r\n                      dbo.EB_Trade AS tt ON tt.autoID = oo.parentID INNER JOIN  \r\n                      dbo.EB_Item AS ii ON ii.OID = oo.cItemID INNER JOIN  \r\n                      dbo.Inventory as inv ON ii.cInvCode = inv.cInvCode  INNER JOIN  \r\n                      dbo.ComputationUnit u with(nolock) on u.cComunitCode = ii.cebunitid  \r\nWHERE   isnull(tt.cBizAuditer,'')<>''  AND (tt.isClosed = 0) and isnull(tt.istoretype,0)  <> 2 AND isnull(oo.cWhCode,'')<>'' and isnull(oo.cRefundState,0) <> 3  and isnull(tt.cshipid,0)=0 and tt.sysstatus<>'ShipConfirm'\r\n AND (inv.bPTOModel = 0)  \r\nGROUP BY oo.cItemID, ii.cInvCode, oo.cWhCode, ISNULL(oo.cFree1, N''), ISNULL(oo.cFree2, N''), ISNULL(oo.cFree3,  N''), ISNULL(oo.cFree4, N''),ISNULL(oo.cFree5, N''), ISNULL(oo.cFree6, N''), ISNULL(oo.cFree7, N''), ISNULL(oo.cFree8, N''), ISNULL(oo.cFree9, N''), ISNULL(oo.cFree10, N'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_OrderQuantity"},{"field":"Type","value":"View"}],"columns":[{"id":"column-193251","object_id":"column-193251","name":"iebnum","name_without_path":"iebnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193252","object_id":"column-193252","name":"iebunitnum","name_without_path":"iebunitnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193253","object_id":"column-193253","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193254","object_id":"column-193254","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193255","object_id":"column-193255","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193256","object_id":"column-193256","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193257","object_id":"column-193257","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193258","object_id":"column-193258","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193259","object_id":"column-193259","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193260","object_id":"column-193260","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193261","object_id":"column-193261","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193262","object_id":"column-193262","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193263","object_id":"column-193263","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193264","object_id":"column-193264","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};