import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            ForEach(0..<3, id: \.self) { r in
                HStack {
                    ForEach(0..<4, id: \.self) { c in
                        Text("gf013-r\(r)c\(c)")
                    }
                }
            }
        }
        .padding()
    }
}
