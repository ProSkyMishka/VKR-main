import SwiftUI

struct Btnss001: View {
    let label: String
    @Binding var n: Int
    var body: some View {
        Button(label) { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("ss001-sum: \(n)")
            Btnss001(label: "ss001-A", n: $n)
            Btnss001(label: "ss001-B", n: $n)
        }
        .padding()
    }
}
