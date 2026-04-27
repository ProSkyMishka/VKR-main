import SwiftUI

struct Pairbcm006: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bcm006-a+") { a += 1 }
            Button("bcm006-b+") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 1
    @State private var b = 2
    var body: some View {
        VStack {
            Text("bcm006-sum: \(a + b)").font(.headline)
            Text("bcm006-pair: a=\(a) b=\(b)")
            Pairbcm006(a: $a, b: $b)
        }
        .padding()
    }
}
