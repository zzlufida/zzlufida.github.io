window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10531","name":"EB_View_OrderSubQuantity","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW [dbo].[EB_View_OrderSubQuantity]  \r\nAS  \r\nSELECT     ISNULL(SUM((oo.num - isnull(oo.refund_num,0)) * isnull(u.ichangrate,1) * ss.iusednum), 0) AS iebnum,ISNULL(SUM((oo.num - isnull(oo.refund_num,0)) * ss.iusednum), 0) AS iebunitnum, ss.cInvCode, oo.cWhCode, ISNULL(ss.cFree1, N'') AS cFree1, ISNULL(ss.cFree2, N'') AS cFree2, ISNULL(ss.cFree3,  \r\n                       N'') AS cFree3, ISNULL(ss.cFree4, N'') AS cFree4, ISNULL(ss.cFree5, N'') AS cFree5, ISNULL(ss.cFree6, N'') AS cFree6, ISNULL(ss.cFree7, N'')   \r\n                      AS cFree7, ISNULL(ss.cFree8, N'') AS cFree8, ISNULL(ss.cFree9, N'') AS cFree9, ISNULL(ss.cFree10, N'') AS cfree10  \r\nFROM         dbo.EB_OrderSub ss INNER JOIN  \r\n       dbo.EB_Order AS oo ON ss.parentid = oo.autoid INNER JOIN  \r\n                      dbo.EB_Trade AS tt ON tt.autoID = oo.parentID INNER JOIN  \r\n                      dbo.EB_Item AS ii ON oo.citemid = ii.oid  INNER JOIN  \r\n                      dbo.ComputationUnit u with(nolock) on u.cComunitCode = ii.cebunitid  \r\nWHERE        isnull(tt.cBizAuditer,'')<>''  AND (tt.isClosed = 0) and isnull(tt.istoretype,0)  <> 2 AND isnull(oo.cWhCode,'')<>'' and isnull(oo.cRefundState,0) <> 3  and isnull(tt.cshipid,0)=0 and tt.sysstatus<>'ShipConfirm'\r\nGROUP BY ss.cInvCode, oo.cWhCode, ISNULL(ss.cFree1, N''), ISNULL(ss.cFree2, N''), ISNULL(ss.cFree3,  N''), ISNULL(ss.cFree4, N''),ISNULL(ss.cFree5, N''), ISNULL(ss.cFree6, N''), ISNULL(ss.cFree7, N''), ISNULL(ss.cFree8, N''), ISNULL(ss.cFree9, N''), ISNULL(ss.cFree10, N'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_OrderSubQuantity"},{"field":"Type","value":"View"}],"columns":[{"id":"column-193335","object_id":"column-193335","name":"iebnum","name_without_path":"iebnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193336","object_id":"column-193336","name":"iebunitnum","name_without_path":"iebunitnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193337","object_id":"column-193337","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193338","object_id":"column-193338","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193339","object_id":"column-193339","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193340","object_id":"column-193340","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193341","object_id":"column-193341","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193342","object_id":"column-193342","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193343","object_id":"column-193343","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193344","object_id":"column-193344","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193345","object_id":"column-193345","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193346","object_id":"column-193346","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193347","object_id":"column-193347","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-193348","object_id":"column-193348","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};