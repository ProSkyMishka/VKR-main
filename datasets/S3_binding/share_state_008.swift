import SwiftUI

struct Btnss008: View {
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
            Text("ss008-sum: \(n)")
            Btnss008(label: "ss008-A", n: $n)
            Btnss008(label: "ss008-B", n: $n)
        }
        .padding()
    }
}
