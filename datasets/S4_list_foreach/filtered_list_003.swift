import SwiftUI

struct ContentView: View {
    @State private var onlyEven = false
    let nums = [1, 2, 3, 4, 5, 6, 7, 8]

    var filtered: [Int] {
        onlyEven ? nums.filter { $0 % 2 == 0 } : nums
    }

    var body: some View {
        VStack(alignment: .leading) {
            Toggle("fl003-onlyEven", isOn: $onlyEven)
            List {
                ForEach(filtered, id: \.self) { n in
                    Text("fl003-n: \(n)")
                }
            }
        }
    }
}
