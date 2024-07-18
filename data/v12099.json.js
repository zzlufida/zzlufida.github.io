window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12099","name":"qryJustifyViewStock","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.qryJustifyViewStock\r\nAS\r\nSELECT TOP 100 PERCENT InventoryClass.cInvCCode AS 存货大类编码, \r\n      InventoryClass.cInvCName AS 存货大类名称, PriceJustify.dDate AS 日期, \r\n      PriceJustify.cInvCode AS 存货编码, Inventory.cInvName AS 存货名称, \r\n      Inventory.cInvStd AS 规格型号, ccomunitname AS 辅计量单位, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN (Inventory.iInvSPrice * iChangRate) ELSE NULL END AS 参考成本, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN PriceJustify.iOPrice * iChangRate ELSE NULL END AS 原参考售价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN PriceJustify.iPrice * iChangRate ELSE NULL END AS 参考售价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOPrice * iChangRate ELSE NULL END AS 原批发价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iPrice * iChangRate ELSE NULL END AS 批发价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvSaleCost * iChangRate ELSE NULL END AS 原零售价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvSaleCost * iChangRate ELSE NULL END AS 零售价, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost1 * iChangRate ELSE NULL END AS 原批发价1, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost1 * iChangRate ELSE NULL END AS 批发价1, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice1 * iChangRate ELSE NULL END AS 原零售价1, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice1 * iChangRate ELSE NULL END AS 零售价1, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost2 * iChangRate ELSE NULL END AS 原批发价2, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost2 * iChangRate ELSE NULL END AS 批发价2, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice2 * iChangRate ELSE NULL END AS 原零售价2, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice2 * iChangRate ELSE NULL END AS 零售价2, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost3 * iChangRate ELSE NULL END AS 原批发价3, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost3 * iChangRate ELSE NULL END AS 批发价3, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice3 * iChangRate ELSE NULL END AS 原零售价3, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice3 * iChangRate ELSE NULL END AS 零售价3, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost4 * iChangRate ELSE NULL END AS 原批发价4, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost4 * iChangRate ELSE NULL END AS 批发价4, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice4 * iChangRate ELSE NULL END AS 原零售价4, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice4 * iChangRate ELSE NULL END AS 零售价4, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost5 * iChangRate ELSE NULL END AS 原批发价5, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost5 * iChangRate ELSE NULL END AS 批发价5, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice5 * iChangRate ELSE NULL END AS 原零售价5, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice5 * iChangRate ELSE NULL END AS 零售价5, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost6 * iChangRate ELSE NULL END AS 原批发价6, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost6 * iChangRate ELSE NULL END AS 批发价6, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice6 * iChangRate ELSE NULL END AS 原零售价6, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice6 * iChangRate ELSE NULL END AS 零售价6, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost7 * iChangRate ELSE NULL END AS 原批发价7, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost7 * iChangRate ELSE NULL END AS 批发价7, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice7 * iChangRate ELSE NULL END AS 原零售价7, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice7 * iChangRate ELSE NULL END AS 零售价7, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost8 * iChangRate ELSE NULL END AS 原批发价8, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost8 * iChangRate ELSE NULL END AS 批发价8, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice8 * iChangRate ELSE NULL END AS 原零售价8, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice8 * iChangRate ELSE NULL END AS 零售价8, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost9 * iChangRate ELSE NULL END AS 原批发价9, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost9 * iChangRate ELSE NULL END AS 批发价9, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice9 * iChangRate ELSE NULL END AS 原零售价9, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice9 * iChangRate ELSE NULL END AS 零售价9, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOInvCost10 * iChangRate ELSE NULL END AS 原批发价10, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNInvCost10 * iChangRate ELSE NULL END AS 批发价10, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iOSalePrice10 * iChangRate ELSE NULL END AS 原零售价10, \r\n      CASE WHEN (NOT iInvSPrice IS NULL AND isnull(iChangRate, 0) <> 0) \r\n      THEN iNSalePrice10 * iChangRate ELSE NULL END AS 零售价10, \r\n      PriceJustify.cMemo AS 备注, PriceJustify.cMaker AS 制单, PriceJustify.ID, \r\n      IsNull(dbo.PriceJustify.cCusCode, '') AS 客户编码, IsNull(Customer.cCusAbbName, '') \r\n      AS 客户简称, IsNull(PriceJustify.cCusCCode, '') AS 客户大类编码, \r\n      IsNull(CustomerClass.cCCName, '') AS 客户大类名称\r\nFROM InventoryClass INNER JOIN\r\n      (Inventory INNER JOIN\r\n      PriceJustify ON Inventory.cInvCode = PriceJustify.cInvCode) ON \r\n      InventoryClass.cInvCCode = Inventory.cInvCCode LEFT JOIN\r\n      ComputationUnit ON \r\n      Inventory.csaComUnitCode = ComputationUnit.cComunitCode LEFT JOIN\r\n      dbo.Customer ON dbo.PriceJustify.cCusCode = dbo.Customer.cCusCode LEFT JOIN\r\n      dbo.CustomerClass ON \r\n      dbo.PriceJustify.cCusCCode = dbo.CustomerClass.cCCCode\r\nWHERE (((Inventory.bSale) = 1))\r\nORDER BY PriceJustify.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"qryJustifyViewStock"},{"field":"Type","value":"View"}],"columns":[{"id":"column-278763","object_id":"column-278763","name":"存货大类编码","name_without_path":"存货大类编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278764","object_id":"column-278764","name":"存货大类名称","name_without_path":"存货大类名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278765","object_id":"column-278765","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278766","object_id":"column-278766","name":"存货编码","name_without_path":"存货编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278767","object_id":"column-278767","name":"存货名称","name_without_path":"存货名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278768","object_id":"column-278768","name":"规格型号","name_without_path":"规格型号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278769","object_id":"column-278769","name":"辅计量单位","name_without_path":"辅计量单位","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278770","object_id":"column-278770","name":"参考成本","name_without_path":"参考成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278771","object_id":"column-278771","name":"原参考售价","name_without_path":"原参考售价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278772","object_id":"column-278772","name":"参考售价","name_without_path":"参考售价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278773","object_id":"column-278773","name":"原批发价","name_without_path":"原批发价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278774","object_id":"column-278774","name":"批发价","name_without_path":"批发价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278775","object_id":"column-278775","name":"原零售价","name_without_path":"原零售价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278776","object_id":"column-278776","name":"零售价","name_without_path":"零售价","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278777","object_id":"column-278777","name":"原批发价1","name_without_path":"原批发价1","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278778","object_id":"column-278778","name":"批发价1","name_without_path":"批发价1","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278779","object_id":"column-278779","name":"原零售价1","name_without_path":"原零售价1","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278780","object_id":"column-278780","name":"零售价1","name_without_path":"零售价1","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278781","object_id":"column-278781","name":"原批发价2","name_without_path":"原批发价2","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278782","object_id":"column-278782","name":"批发价2","name_without_path":"批发价2","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278783","object_id":"column-278783","name":"原零售价2","name_without_path":"原零售价2","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278784","object_id":"column-278784","name":"零售价2","name_without_path":"零售价2","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278785","object_id":"column-278785","name":"原批发价3","name_without_path":"原批发价3","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278786","object_id":"column-278786","name":"批发价3","name_without_path":"批发价3","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278787","object_id":"column-278787","name":"原零售价3","name_without_path":"原零售价3","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278788","object_id":"column-278788","name":"零售价3","name_without_path":"零售价3","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278789","object_id":"column-278789","name":"原批发价4","name_without_path":"原批发价4","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278790","object_id":"column-278790","name":"批发价4","name_without_path":"批发价4","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278791","object_id":"column-278791","name":"原零售价4","name_without_path":"原零售价4","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278792","object_id":"column-278792","name":"零售价4","name_without_path":"零售价4","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278793","object_id":"column-278793","name":"原批发价5","name_without_path":"原批发价5","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278794","object_id":"column-278794","name":"批发价5","name_without_path":"批发价5","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278795","object_id":"column-278795","name":"原零售价5","name_without_path":"原零售价5","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278796","object_id":"column-278796","name":"零售价5","name_without_path":"零售价5","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278797","object_id":"column-278797","name":"原批发价6","name_without_path":"原批发价6","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278798","object_id":"column-278798","name":"批发价6","name_without_path":"批发价6","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278799","object_id":"column-278799","name":"原零售价6","name_without_path":"原零售价6","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278800","object_id":"column-278800","name":"零售价6","name_without_path":"零售价6","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278801","object_id":"column-278801","name":"原批发价7","name_without_path":"原批发价7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278802","object_id":"column-278802","name":"批发价7","name_without_path":"批发价7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278803","object_id":"column-278803","name":"原零售价7","name_without_path":"原零售价7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278804","object_id":"column-278804","name":"零售价7","name_without_path":"零售价7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278805","object_id":"column-278805","name":"原批发价8","name_without_path":"原批发价8","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278806","object_id":"column-278806","name":"批发价8","name_without_path":"批发价8","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278807","object_id":"column-278807","name":"原零售价8","name_without_path":"原零售价8","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278808","object_id":"column-278808","name":"零售价8","name_without_path":"零售价8","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278809","object_id":"column-278809","name":"原批发价9","name_without_path":"原批发价9","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278810","object_id":"column-278810","name":"批发价9","name_without_path":"批发价9","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278811","object_id":"column-278811","name":"原零售价9","name_without_path":"原零售价9","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278812","object_id":"column-278812","name":"零售价9","name_without_path":"零售价9","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278813","object_id":"column-278813","name":"原批发价10","name_without_path":"原批发价10","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278814","object_id":"column-278814","name":"批发价10","name_without_path":"批发价10","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278815","object_id":"column-278815","name":"原零售价10","name_without_path":"原零售价10","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278816","object_id":"column-278816","name":"零售价10","name_without_path":"零售价10","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278817","object_id":"column-278817","name":"备注","name_without_path":"备注","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278818","object_id":"column-278818","name":"制单","name_without_path":"制单","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278819","object_id":"column-278819","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278820","object_id":"column-278820","name":"客户编码","name_without_path":"客户编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278821","object_id":"column-278821","name":"客户简称","name_without_path":"客户简称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278822","object_id":"column-278822","name":"客户大类编码","name_without_path":"客户大类编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278823","object_id":"column-278823","name":"客户大类名称","name_without_path":"客户大类名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};