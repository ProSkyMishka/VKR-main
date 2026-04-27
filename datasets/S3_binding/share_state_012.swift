import SwiftUI

struct Btnss012: View {
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
            Text("ss012-sum: \(n)")
            Btnss012(label: "ss012-A", n: $n)
            Btnss012(label: "ss012-B", n: $n)
        }
        .padding()
    }
}
