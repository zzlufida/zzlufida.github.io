window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10766","name":"fd_fetch","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view fd_fetch\r\nAs\r\n--内部活期取款单\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '04') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 22 OR\r\n      fd_entities.iDeriveBIType = 22)\r\nUNION\r\n--银行付款单\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '02') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 27 OR\r\n      fd_entities.iDeriveBIType = 27)\r\nUNION\r\n--银行结算单（付款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '02') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 28 OR\r\n      fd_entities.iDeriveBIType = 28)\r\nUNION\r\n--内部定期存款单（来源账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '04') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 31 OR\r\n      fd_entities.iDeriveBIType = 31 or fd_entities.iBIType = 35 OR\r\n      fd_entities.iDeriveBIType = 35)\r\nUNION\r\n--内部定期取款单（存款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '04') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      0 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.fixed_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 32 OR\r\n      fd_entities.iDeriveBIType = 32 or fd_entities.iBIType = 36 OR\r\n      fd_entities.iDeriveBIType = 36)\r\nUNION\r\n--银行定期存款单（来源账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '02') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions INNER JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType inner JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 33 OR\r\n      fd_entities.iDeriveBIType = 33 or fd_entities.iBIType = 37 OR\r\n      fd_entities.iDeriveBIType = 37)\r\nUNION\r\n--银行定期取款单（存款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '02') \r\n      AS cFetID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      0 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions INNER JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType inner JOIN\r\n      fd_accdef ON fd_transactions.fixed_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 34 OR\r\n      fd_entities.iDeriveBIType = 34 or fd_entities.iBIType = 38 OR\r\n      fd_entities.iDeriveBIType = 38)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fd_fetch"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204702","object_id":"column-204702","name":"transactions_id","name_without_path":"transactions_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204703","object_id":"column-204703","name":"cFetID","name_without_path":"cFetID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204704","object_id":"column-204704","name":"cAccID","name_without_path":"cAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204705","object_id":"column-204705","name":"dBill_Date","name_without_path":"dBill_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204706","object_id":"column-204706","name":"isc","name_without_path":"isc","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204707","object_id":"column-204707","name":"cTran_Name","name_without_path":"cTran_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204708","object_id":"column-204708","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204709","object_id":"column-204709","name":"cCheckCode","name_without_path":"cCheckCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204710","object_id":"column-204710","name":"cBookCode","name_without_path":"cBookCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204711","object_id":"column-204711","name":"mMoney","name_without_path":"mMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204712","object_id":"column-204712","name":"iMonth","name_without_path":"iMonth","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204713","object_id":"column-204713","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204714","object_id":"column-204714","name":"nFrat","name_without_path":"nFrat","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"16, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204715","object_id":"column-204715","name":"mMoney_F","name_without_path":"mMoney_F","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204716","object_id":"column-204716","name":"bSettle","name_without_path":"bSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204717","object_id":"column-204717","name":"money_name","name_without_path":"money_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};