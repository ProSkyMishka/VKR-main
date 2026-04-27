import SwiftUI

struct Pairbcm012: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm012-a+") { a += 1 }
            Button("bcm012-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm012-sum: \(a + b)").font(.headline)
            Text("bcm012-pair: a=\(a) b=\(b)")
            Pairbcm012(a: $a, b: $b)
        }
        .padding()
    }
}
