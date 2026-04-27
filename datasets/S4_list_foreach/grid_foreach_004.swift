import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            ForEach(0..<2, id: \.self) { r in
                HStack {
                    ForEach(0..<3, id: \.self) { c in
                        Text("gf004-r\(r)c\(c)")
                    }
                }
            }
        }
        .padding()
    }
}
