-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2021 at 03:40 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courier_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `couriers`
--

CREATE TABLE `couriers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Sender_Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sender_Address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sender_Phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sender_Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sender_Origin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Receiver_Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Receiver_Address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Receiver_Destination` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Receiver_Phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Receiver_Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date` date NOT NULL,
  `Courier_Status_date` date NOT NULL,
  `Catagory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Weight` int(11) NOT NULL,
  `Order_Id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tracking_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Courier_Status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `couriers`
--

INSERT INTO `couriers` (`id`, `Sender_Name`, `Sender_Address`, `Sender_Phone`, `Sender_Email`, `Sender_Origin`, `Receiver_Name`, `Receiver_Address`, `Receiver_Destination`, `Receiver_Phone`, `Receiver_Email`, `Date`, `Courier_Status_date`, `Catagory`, `Weight`, `Order_Id`, `tracking_no`, `Courier_Status`, `created_at`, `updated_at`) VALUES
(14, 'Jaima Jarnaz', 'Tongi', '01786543663', 'jaima.jarnaz1234@gmail.com', 'Dhaka', 'jannat', 'khulna', 'Khulna', '01927673464', 'jannat@gmail.com', '2021-07-03', '2021-07-03', 'Box', 2, 'CMS-0102-0001', 'AJM-0728-2031', 'Courier is on the way', '2021-07-03 05:02:35', '2021-07-03 05:02:35'),
(21, 'Muntakim', 'Uttora', '01786543663', 'muntakim@gmail.com', 'Dhaka', 'Rafia', 'khulna', 'Khulna', '01927673464', 'rafia@gmail.com', '2021-07-03', '2021-07-03', 'Box', 2, 'CMS-0102-0002', 'AJM-0728-2032', 'Courier is on the way', '2021-07-03 07:33:48', '2021-07-03 07:33:48'),
(22, 'Pori', 'Gazipur', '01990276333', 'pori@gmail.com', 'Dhaka', 'Orin', 'Khilgao', 'Dhaka', '01990753443', 'orin@gmail.com', '2021-07-03', '2021-07-03', 'Box', 2, 'CMS-0102-0003', 'AJM-0728-2033', 'Courier is on the way', '2021-07-03 07:34:36', '2021-07-03 07:34:36'),
(23, 'Nusrat Jahan', 'khilgaw', '01990276333', 'nusrat@gmail.com', 'Dhaka', 'Jannatul Jenat Khusbo', 'khulna', 'Khulna', '01927673464', 'jannat22@gmail.com', '2021-07-03', '2021-07-03', 'Box', 2, 'CMS-0102-0004', 'AJM-0728-2034', 'Courier is on delivery', '2021-07-03 07:38:20', '2021-07-03 07:38:20'),
(24, 'Kazi Omar', 'Sylet', '013556777676', 'kazi@gmail.com', 'Sylet', 'Nazma Akter', 'khulna', 'Khulna', '01990753443', 'nazma@gmail.com', '2021-07-03', '2021-07-03', 'Box', 2, 'CMS-0102-0005', 'AJM-0728-2035', 'Courier is on the way', '2021-07-03 07:39:29', '2021-07-03 07:39:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `couriers`
--
ALTER TABLE `couriers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `couriers_sender_email_unique` (`Sender_Email`),
  ADD UNIQUE KEY `couriers_receiver_email_unique` (`Receiver_Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `couriers`
--
ALTER TABLE `couriers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
