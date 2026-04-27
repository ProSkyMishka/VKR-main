import SwiftUI

struct Btnss006: View {
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
            Text("ss006-sum: \(n)")
            Btnss006(label: "ss006-A", n: $n)
            Btnss006(label: "ss006-B", n: $n)
        }
        .padding()
    }
}
