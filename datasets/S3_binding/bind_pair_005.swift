import SwiftUI

struct ABbp005: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp005-Aplus") { a += 1 }
            Button("bp005-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp005-A=\(a) B=\(b)")
            ABbp005(a: $a, b: $b)
        }
        .padding()
    }
}
