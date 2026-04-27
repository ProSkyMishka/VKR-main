import SwiftUI

struct Btnss011: View {
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
            Text("ss011-sum: \(n)")
            Btnss011(label: "ss011-A", n: $n)
            Btnss011(label: "ss011-B", n: $n)
        }
        .padding()
    }
}
